// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import app from "@/lib/firestore/init";
import { retrieveData, retrieveDataById } from "@/lib/firestore/service";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from "next";

type AuditResult = {
  id: string;
  generalInfo: {
    clientName: string;
    websiteURL: string;
    structure: number;
  };
  scoreInfo: {
    score: string;
    description: string;
  };
  metrics: {
    [key: string]: string; // Nama metrik sebagai key, nilai sebagai string.
  };
  metadataData: {
    [key: string]: string | number; // Nama metadata sebagai key, nilai string/angka.
  };
  contentAnalysisData: {
    [key: string]: string | number; // Nama analisis konten sebagai key, nilai string/angka.
  };
  createdAt: string;
  updatedAt: string;
};

type Data = {
  statusCode: number;
  message?: string;
  status: boolean;
  data: AuditResult[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    if (req.query.history![1]) {
      // const data = await retrieveDataById("auditResults", req.query.history![1]);
      const data = await retrieveDataById("users", req.query.history![1]);
      res.status(200).json({ data, statusCode: 200, status: true });
    } else {
      const data = await retrieveData("auditResults");
      res.status(200).json({ data, statusCode: 200, status: true });
    }
    // Retrieve data from Firestore's "auditResults" collection
    const data = await retrieveData("auditResults");

    // Transform the Firestore data into the desired structure
    const auditResults: AuditResult[] = Object.entries(data).map(([id, doc]: [string, any]) => ({
      id,
      generalInfo: doc.generalInfo,
      scoreInfo: doc.scoreInfo,
      metrics: doc.metrics,
      metadataData: doc.metadataData,
      contentAnalysisData: doc.contentAnalysisData,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    }));

    res.status(200).json({ data: auditResults, statusCode: 200, status: true });
  } catch (error) {
    console.error("Error retrieving audit results:", error);
    res.status(500).json({ data: [], statusCode: 500, status: false, message: "Server error" });
  }
}

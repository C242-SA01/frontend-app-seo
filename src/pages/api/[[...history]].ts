import type { NextApiRequest, NextApiResponse } from "next";
import { getAuditHistoryByEmail, getAuditHistoryById } from "@/lib/firestore/service";

type Data = {
  statusCode: number;
  message?: string;
  status: boolean;
  data: any | null;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    const { email, id } = req.query;

    // Prioritas pertama: Ambil data berdasarkan ID jika tersedia
    if (id && typeof id === "string") {
      const historyData = await getAuditHistoryById(id);
      if (!historyData) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: "Data not found",
          data: null,
        });
      }
      return res.status(200).json({
        statusCode: 200,
        status: true,
        data: historyData,
      });
    }

    // Jika ID tidak tersedia, ambil data berdasarkan email
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Email or ID is required",
        data: null,
      });
    }

    const historyData = await getAuditHistoryByEmail(email);

    if (!historyData || historyData.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "Data not found",
        data: null,
      });
    }

    res.status(200).json({
      statusCode: 200,
      status: true,
      data: historyData,
    });
  } catch (error) {
    console.error("Error in API handler:", error);
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Server error",
      data: null,
    });
  }
}

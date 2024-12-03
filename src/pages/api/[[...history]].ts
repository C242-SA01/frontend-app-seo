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
    const { id, email } = req.query;
    console.log("fetching id ", id);

    // Prioritaskan pencarian berdasarkan ID jika ID tersedia
    if (id && typeof id === "string") {
      const historyData = await getAuditHistoryById(id);

      if (!historyData) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: "History not found",
          data: null,
        });
      }

      return res.status(200).json({
        statusCode: 200,
        status: true,
        data: historyData,
      });
    }

    // Ambil daftar history berdasarkan email
    if (!email || typeof email !== "string") {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "Email is required if ID is not provided",
        data: null,
      });
    }

    console.log("Fetching history by email:", email);
    const historyList = await getAuditHistoryByEmail(email);

    if (!historyList || historyList.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        status: false,
        message: "No history found for the given email",
        data: null,
      });
    }

    console.log("History data:", historyList); // Tambahkan log data hasil query

    return res.status(200).json({
      statusCode: 200,
      status: true,
      data: historyList,
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

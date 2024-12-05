import { getToken } from "next-auth/jwt";
import type { NextApiRequest, NextApiResponse } from "next";
import { addAuditHistoryByEmail } from "@/lib/firestore/service"; // Fungsi untuk menyimpan hasil audit ke Firestore
import fetch from "node-fetch";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const token = await getToken({ req, secret });
    if (!token) {
        console.error("Unauthorized access - no session found");
        return res.status(401).json({ error: "Unauthorized" });
    }

    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: "URL is required" });
    }

    try {
        // Kirim ke Flask API
        const flaskResponse = await fetch("http://localhost:5000/audit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        });

        const flaskData = await flaskResponse.json();
        if (!flaskResponse.ok) {
            throw new Error(flaskData.error || "Error from Flask API");
        }

        // Simpan hasil ke Firestore menggunakan fungsi dari service.ts
        const userEmail = token.email;
        if (!userEmail) {
            return res.status(400).json({ error: "User email is required" });
        }

        const savedAudit = await addAuditHistoryByEmail(userEmail, {
            url,
            result: flaskData,
            createdAt: new Date(),
        });

        console.log("Audit history saved successfully:", savedAudit); // Log ketika berhasil disimpan

        res.status(200).json(flaskData);
    } catch (error: any) {
        console.error("Error processing request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

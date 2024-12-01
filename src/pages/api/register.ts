import { signUp } from "@/lib/firestore/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    try {
      await signUp(req.body, ({ status, message }: { status: boolean; message: string }) => {
        if (status) {
          res.status(200).json({ status: true, message: "User created successfully" });
        } else {
          res.status(400).json({ status: false, message: message });
        }
      });
    } catch (error) {
      console.error("Error in registration handler:", error);
      res.status(500).json({ status: false, message: "Internal server error" });
    }
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" });
  }
}

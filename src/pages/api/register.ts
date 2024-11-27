import { signUp } from "@/lib/firebase/service";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    await signUp(req.body, ({ status, message }: { status: true; message: string }) => {
      if (status) {
        return res.status(200).json({ status: true, message: "User created successfully" });
      } else {
        return res.status(400).json({ status: false, message: message });
      }
    });
  } else {
    return res.status(405).json({ status: false, message: "Method not allowed" });
  }
}

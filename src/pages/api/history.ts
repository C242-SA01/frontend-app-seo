// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  statusCode: number;
  status: boolean;
  data: {
    id: string;
    name: string;
    url: string;
  }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("histories");
  res.status(200).json({ data, statusCode: 200, status: true });
}

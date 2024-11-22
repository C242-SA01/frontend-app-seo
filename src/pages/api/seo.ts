// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  name: string;
  data: {
    id: number;
    url: string;
    name: string;
  }[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = [
    {
      id: 1,
      url: "https://example.com",
      name: "Example Website",
    },
    {
      id: 2,
      url: "https://example.com",
      name: "Example Website",
    },
  ];
  res.status(200).json({ data: data, statusCode: 200, status: true });
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/header-footer
import type { NextApiRequest, NextApiResponse } from "next";
import { NavigationLink } from "../../@types/header";
import header from "../../data/header.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<NavigationLink[]>
) {
  res.status(200).json(header);
}

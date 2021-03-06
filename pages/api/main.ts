// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/header-footer
import type { NextApiRequest, NextApiResponse } from "next";
import type { MainState } from "../../@types/main";
import main from "../../data/main.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MainState>
) {
  res.status(200).json(main);
}

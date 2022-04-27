// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/header-footer
import type { NextApiRequest, NextApiResponse } from "next";
import { FooterSocialLink } from "../../@types/header";
import footer from "../../data/footer.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FooterSocialLink[]>
) {
  res.status(200).json(footer);
}

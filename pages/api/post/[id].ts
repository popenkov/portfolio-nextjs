// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/post/2
import type { NextApiRequest, NextApiResponse } from "next";
import type { PostType } from "../../../@types/blog";
import blog from "../../../data/blog.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostType[]>
) {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
  /*   res.status(200).json(blog); */
}

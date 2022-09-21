import type { NextApiRequest, NextApiResponse } from "next";

const handler = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Hello Gays" });
};

export default handler;

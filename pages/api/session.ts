import { Session } from "next-auth/core/types";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

type Data = {
  error?: string;
  session?: Session;
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({
      status: "Unauthorized user - no session",
    });
  } else {
    return res.status(200).json({ status: "Sucess", session });
  }
};

export default handler;

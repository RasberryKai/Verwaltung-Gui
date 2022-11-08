import { createGame } from "../../lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
    case "PUT":
      const id = await createGame(req.body);
      res.status(201).json({ id });
      break;
    default:
      res.status(405).send("Method not allowed");
      break;
  }
}

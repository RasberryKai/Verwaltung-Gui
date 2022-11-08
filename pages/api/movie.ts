import { NextApiRequest, NextApiResponse } from "next";
import { createMovie } from "../../lib/redis";

// TODO create dynamic routes for book, movie, and game
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
    case "PUT":
      const id = await createMovie(req.body);
      res.status(201).json({ id });
      break;
    case "GET":
      // TODO: receive all items
      res.status(200).json({ message: "GET" });
      break;
    default:
      res.status(405).send("Method not allowed");
      break;
  }
}

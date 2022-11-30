import { NextApiRequest, NextApiResponse } from "next";
import { createMovie, getMovies } from "../../lib/redis";

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
            const movies = await getMovies();
            res.status(200).json({ movies });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

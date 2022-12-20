import { NextApiRequest, NextApiResponse } from "next";
import { createMovie, getMovies, updateMovie } from "../../lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
        case "PUT":
            const movieId = await createMovie(req.body);
            res.status(201).json({ id: movieId });
            break;
        case "GET":
            const movies = await getMovies();
            res.status(200).json({ movies });
            break;
        case "PATCH":
            const { id, available, condition } = req.body;
            await updateMovie(id, available, condition);
            res.status(200).json({ result: "success" });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

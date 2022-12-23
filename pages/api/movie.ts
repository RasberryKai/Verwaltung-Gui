import { NextApiRequest, NextApiResponse } from "next";
import { createMovie, getMovie, getMovies, removeMovie } from "../../lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
        case "PUT":
            const movieId = await createMovie(req.body);
            res.status(201).json({ id: movieId });
            break;
        case "GET":
            if (req.query.id) {
                const movie = await getMovie(req.query.id as string);
                res.status(200).json({ movie });
            }
            const movies = await getMovies();
            res.status(200).json({ movies });
            break;
        case "PATCH":
            const newMovie = req.body;
            const id = req.query.id as string;
            if (!id) {
                res.status(400).json({ error: "No id provided" });
            }
            const movie = (await getMovie(id)).toJSON();
            await removeMovie(id);
            await createMovie(Object.assign({}, movie, newMovie));
            res.status(200).json({ result: "success" });
            break;
        case "DELETE":
            const delId = req.query.id as string;
            await removeMovie(delId);
            res.status(200).json({ result: "success" });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

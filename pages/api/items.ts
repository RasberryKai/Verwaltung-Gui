import { NextApiRequest, NextApiResponse } from "next";
import { getBooks, getGames, getMovies } from "../../lib/redis";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const movies = await getMovies();
    const games = await getGames();
    const books = await getBooks();
    return res.status(200).json([...movies, ...games, ...books]);
}

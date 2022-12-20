import { createGame, getGames, updateBook } from "../../lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
        case "PUT":
            const gameId = await createGame(req.body);
            res.status(201).json({ id: gameId });
            break;
        case "GET":
            const games = await getGames();
            res.status(200).json({ games });
            break;
        case "PATCH":
            const { id, available, condition } = req.body;
            await updateBook(id, available, condition);
            res.status(200).json({ result: "success" });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

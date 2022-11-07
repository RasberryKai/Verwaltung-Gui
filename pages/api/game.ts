import {createGame} from "../../lib/redis";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = await createGame(req.body);
    res.status(200).json({id});
}
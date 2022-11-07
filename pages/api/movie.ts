import {NextApiRequest, NextApiResponse} from "next";
import {createMovie} from "../../lib/redis";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const id = await createMovie(req.body);
    res.status(200).json({id});
}

import {createBook} from "../../lib/redis";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await createBook(req.body);
    res.status(200).json(result);
}

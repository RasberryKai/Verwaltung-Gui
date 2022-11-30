import { createBook, getBooks } from "../../lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    switch (req.method) {
        case "POST":
        case "PUT":
            const id = await createBook(req.body);
            res.status(201).json({ result: id });
            break;
        case "GET":
            const books = await getBooks();
            res.status(200).json({ books });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

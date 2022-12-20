import { createBook, getBooks, updateBook } from "../../lib/redis";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "POST":
        case "PUT":
            const bookId = await createBook(req.body);
            res.status(201).json({ result: bookId });
            break;
        case "GET":
            const books = await getBooks();
            res.status(200).json({ books });
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

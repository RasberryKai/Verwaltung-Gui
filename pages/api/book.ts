import { createBook, removeBook, getBook, getBooks } from "../../lib/redis";
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
            const newBook = req.body;
            const id = req.query.id as string;
            if (!id) {
                res.status(400).json({ error: "No id provided" });
            }
            const book = (await getBook(id)).toJSON();
            await removeBook(id);
            await createBook(Object.assign({}, book, newBook));
            res.status(200).json({ result: "success" });
            break;
        case "DELETE":
            const delId = req.query.id as string;
            await removeBook(delId);
            res.status(200).json({ result: "success" });
            break;
        default:
            res.status(405).send("Method not allowed");
            break;
    }
}

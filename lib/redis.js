import {Entity, Schema, Client} from "redis-om";

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Movie extends Entity {}
let movieSchema = new Schema(
    Movie,
    {
        name: {type: "string"},
        description: {type: "string"},
        publishDate: {type: "number"},
        category: {type: "string"},
        condition: {type: "number"},
        duration: {type: "number"},
        ageRating: {type: "number"},
        blockbuster: {type: "boolean"},
        regisseur: {type: "string"},
    },
    {
        dataStructure: "JSON",
    }
)

class Book extends Entity {}
let bookSchema = new Schema(
    Book,
    {
        name: {type: "string"},
        description: {type: "string"},
        publishDate: {type: "number"},
        category: {type: "string"},
        condition: {type: "number"},
        publisher: {type: "string"},
        author: {type: "string"},
        isbn: {type: "string"},
        pages: {type: "number"},
    },
    {
        dataStructure: "JSON",
    }
)

class Game extends Entity {}
let gameSchema = new Schema(
    Game,
    {
        name: {type: "string"},
        description: {type: "string"},
        publishDate: {type: "number"},
        category: {type: "string"},
        condition: {type: "number"},
        publisher: {type: "string"},
        developer: {type: "string"},
        platform: {type: "string"},
        ageRating: {type: "number"},
    },
)

export async function createMovie(data) {
    await connect();
    const repository = client.fetchRepository(movieSchema);

    const movie = repository.createEntity(data);
    await repository.save(movie);
}

export async function createBook(data) {
    await connect();
    const repository = client.fetchRepository(bookSchema);

    const book = repository.createEntity(data);
    await repository.save(book);
}

export async function createGame(data) {
    await connect();
    const repository = client.fetchRepository(gameSchema);

    const game = repository.createEntity(data);
    await repository.save(game);
}

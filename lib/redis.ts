import { Client, Entity, Schema } from "redis-om";

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
        name: { type: "string" },
        description: { type: "string" },
        publishDate: { type: "string" },
        category: { type: "string[]" },
        available: { type: "boolean" },
        condition: { type: "number" },
        duration: { type: "number" },
        ageRating: { type: "number" },
        blockbuster: { type: "boolean" },
        regisseur: { type: "string" },
    },
    {
        dataStructure: "JSON",
    }
);

class Book extends Entity {}
let bookSchema = new Schema(
    Book,
    {
        name: { type: "string" },
        description: { type: "string" },
        publishDate: { type: "string" },
        category: { type: "string[]" },
        available: { type: "boolean" },
        condition: { type: "number" },
        publisher: { type: "string" },
        author: { type: "string" },
        isbn: { type: "string" },
        pages: { type: "number" },
    },
    {
        dataStructure: "JSON",
    }
);

class Game extends Entity {}
let gameSchema = new Schema(Game, {
    name: { type: "string" },
    description: { type: "string" },
    publishDate: { type: "string" },
    available: { type: "boolean" },
    category: { type: "string[]" },
    condition: { type: "number" },
    publisher: { type: "string" },
    platform: { type: "string" },
    ageRating: { type: "number" },
});

export async function createMovie(data: any) {
    await connect();
    const repository = client.fetchRepository(movieSchema);
    await repository.createIndex();

    const movie = repository.createEntity(data);
    return await repository.save(movie);
}

export async function createBook(data: any) {
    await connect();
    const repository = client.fetchRepository(bookSchema);
    await repository.createIndex();

    const book = repository.createEntity(data);
    return await repository.save(book);
}

export async function createGame(data: any) {
    await connect();
    const repository = client.fetchRepository(gameSchema);
    await repository.createIndex();

    const game = repository.createEntity(data);
    return await repository.save(game);
}

export async function getMovies() {
    await connect();
    const repository = client.fetchRepository(movieSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

export async function getBooks() {
    await connect();
    const repository = client.fetchRepository(bookSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

export async function getGames() {
    await connect();
    const repository = client.fetchRepository(gameSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

// TODO create methods for receiving all items

import { Client, Entity, Schema } from "redis-om";

const client = new Client();
client.open(process.env.REDIS_URL);

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
    const repository = client.fetchRepository(movieSchema);
    await repository.createIndex();

    const movie = repository.createEntity(data);
    return await repository.save(movie);
}

export async function getMovie(id: string) {
    const repository = client.fetchRepository(movieSchema);
    return await repository.fetch(id);
}

export async function getMovies() {
    const repository = client.fetchRepository(movieSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

export async function removeMovie(id: string) {
    await client.fetchRepository(movieSchema).remove(id);
}

export async function createBook(data: any) {
    const repository = client.fetchRepository(bookSchema);
    await repository.createIndex();

    const book = repository.createEntity(data);
    return await repository.save(book);
}

export async function getBook(id: string) {
    const repository = client.fetchRepository(bookSchema);
    return await repository.fetch(id);
}

export async function getBooks() {
    const repository = client.fetchRepository(bookSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

export async function deleteBook(id: string) {
    await client.fetchRepository(bookSchema).remove(id);
}

export async function createGame(data: any) {
    const repository = client.fetchRepository(gameSchema);
    await repository.createIndex();

    const game = repository.createEntity(data);
    return await repository.save(game);
}

export async function getGame(id: string) {
    const repository = client.fetchRepository(gameSchema);
    return await repository.fetch(id);
}

export async function getGames() {
    const repository = client.fetchRepository(gameSchema);
    await repository.createIndex();

    return repository.search().return.all();
}

export async function removeGame(id: string) {
    await client.fetchRepository(gameSchema).remove(id);
}

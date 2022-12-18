import { BookWithoutId, GameWithoutId, MovieWithoutId } from "../utils/Models";
import axios from "axios";

export function postBook(book: BookWithoutId) {
    return axios.post("/api/book", book);
}

export function postGame(game: GameWithoutId) {
    return axios.post("/api/game", game);
}

export function postMovie(movie: MovieWithoutId) {
    return axios.post("/api/movie", movie);
}

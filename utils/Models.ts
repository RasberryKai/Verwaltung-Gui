export interface Medium {
    id: string;
    name: string;
    description: string;
    publishDate: string;
    category: string[];
    available: boolean;
    condition: number;
}

export interface Movie extends Medium {
    duration: number;
    ageRating: number;
    blockbuster: boolean;
    regisseur: string;
}

export interface Book extends Medium {
    publisher: string;
    author: string;
    isbn: string;
    pages: number;
}

export interface Game extends Medium {
    publisher: string;
    platform: string;
    ageRating: number;
}

export interface MediumWithoutId {
    name: string;
    description: string;
    publishDate: string;
    category: string[];
    available: boolean;
    condition: number;
}

export interface MovieWithoutId extends MediumWithoutId {
    duration: number;
    ageRating: number;
    blockbuster: boolean;
    regisseur: string;
}

export interface BookWithoutId extends MediumWithoutId {
    publisher: string;
    author: string;
    isbn: string;
    pages: number;
}

export interface GameWithoutId extends MediumWithoutId {
    publisher: string;
    platform: string;
    ageRating: number;
}

export enum MediumType {
    BOOK,
    GAME,
    MOVIE,
}

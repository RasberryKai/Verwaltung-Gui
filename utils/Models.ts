export interface Medium {
    id: string;
    name: string;
    description: string;
    publishDate: string;
    category: string;
    available: boolean;
    condition: number;
}

export interface Movie extends Medium {
    duration: number;
    ageRating: number;
    blockbuster: boolean;
    regisseur: string;
}

/*
1. name
2. (publish Date)
3. Category
4. condition
5. available
 */

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

export interface Cd extends Medium {
    publisher: string;
    artist: string;
    duration: number;
}

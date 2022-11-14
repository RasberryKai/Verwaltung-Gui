export interface Movie {
  name: string;
  description: string;
  publishDate: string;
  category: string;
  condition: number;
  duration: number;
  ageRating: number;
  blockbuster: boolean;
  regisseur: string;
}

export interface Book {
  name: string;
  description: string;
  publishDate: string;
  category: string;
  condition: number;
  publisher: string;
  author: string;
  isbn: string;
  pages: number;
}

export interface Game {
  name: string;
  description: string;
  publishDate: string;
  category: string;
  condition: number;
  publisher: string;
  platform: string;
  ageRating: number;
}

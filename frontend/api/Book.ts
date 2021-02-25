export interface BookModel {
    id: number;
    name: string;
    category: string;
    author: string;
    publisher: string;
    language: string;
    pages: number;
    yearPublished: number;
    photos: [];
    price: number;
    descriptions: string;
}

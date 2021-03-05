export interface BookModel {
    _id: number;
    name: string;
    category: string;
    authorId: BookModel;
    publisherId: BookModel;
    language: string;
    pages: number;
    photos: BookModel;
    yearPublished: number;
    price: number;
    descriptions: string;
}

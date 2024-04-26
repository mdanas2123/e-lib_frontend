export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: Author;
    authorName: string;

};

export type Author = {
    name: string;
    authorName: string;
};
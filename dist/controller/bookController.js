"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.addBook = exports.getBooks = void 0;
let books = [];
const getBooks = () => {
    return books;
};
exports.getBooks = getBooks;
const addBook = (book) => {
    books.push(book);
};
exports.addBook = addBook;
const deleteBook = (id) => {
    const index = books.findIndex((item) => item.id === id);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
};
exports.deleteBook = deleteBook;

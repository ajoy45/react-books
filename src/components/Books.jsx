import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {
    const data=useLoaderData();
    const books=data.books
    return (
        <div className='px-24 grid grid-cols-1 md:grid-cols-4 gap-8 my-5'>
             {
                books.map(book=><Book
                key={book.isbn13}
                 book={book}
                ></Book>)
             }
        </div>
    );
};

export default Books;
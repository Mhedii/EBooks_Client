import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import React from 'react';
import BookCard from './BookCard';

const Books = () => {
  const { data } = useGetBooksQuery({});
  //   console.log('data', data);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-15 ">
        Last 10 Added Books
      </h1>
      {data ? (
        <div className="container grid grid-cols-3 gap-12">
          {data.data.map((book: any) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Books;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import BookCard from './BookCard';

const Books = () => {
  const { data } = useGetBooksQuery({});

  return (
    <div className="">
      <div className=" grid grid-cols-3"></div>
      <h1 className=" text-3xl text-center font-semibold mt-6 mb-16 ">
        Last 10 Added Books
      </h1>
      {data ? (
        <div className="container grid grid-cols-3   lg:grid-cols-5 gap-12">
          {data.data
            .slice(-10)
            .reverse()
            .map((book: any) => (
              <BookCard key={book._id} book={book} />
            ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Books;

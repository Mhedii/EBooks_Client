import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import BookCard from './BookCard';

const Books = () => {
  const { data } = useGetBooksQuery({});

  return (
    <div className="mb-20">
      <h1 className="text-3xl text-center font-semibold  mb-20 ">
        Last 10 Added Books
      </h1>
      {data ? (
        <div className="container grid grid-cols-4 gap-12">
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

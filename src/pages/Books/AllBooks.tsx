import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import { Link } from 'react-router-dom';
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs';
import { useState } from 'react';
import BookCard from '../Home/BookCard';
const AllBooks = () => {
  const { data } = useGetBooksQuery({});
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div className="">
      <div className=" grid grid-cols-3">
        <div className="col-start-2 flex ">
          <input
            type="text"
            placeholder="Search here...."
            className="input input-bordered  input-md w-full  "
          />

          {isFilter ? (
            <BsFilterRight
              className="text-3xl my-2 ml-2 rounded bg-slate-200 hover:cursor-pointer"
              onClick={() => setIsFilter(false)}
            />
          ) : (
            <BsFilterLeft
              className="text-3xl my-2 ml-2   hover:cursor-pointer"
              onClick={() => setIsFilter(true)}
            />
          )}
        </div>
      </div>

      {data ? (
        <div className="container grid grid-cols-2 lg:grid-cols-5 gap-12">
          {data.data.map((book: any) => (
            <Link key={book._id} to={`/books/:${book._id}`}>
              <BookCard book={book} />
            </Link>
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default AllBooks;

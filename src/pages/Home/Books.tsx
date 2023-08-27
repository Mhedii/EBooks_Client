import { useGetBooksQuery } from '@/redux/features/books/bookApi';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs';
import { useState } from 'react';
const Books = () => {
  const { data } = useGetBooksQuery({});
  const [isFilter, setIsFilter] = useState(false);
  return (
    <div className="">
      <div className=" grid grid-cols-3">
        {/* <div className="col-start-2 flex "> */}
        {/* <input
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
          )} */}
        {/* </div> */}
      </div>
      <h1 className="text-3xl text-center font-semibold mt-6 mb-16 ">
        Last 10 Added Books
      </h1>
      {data ? (
        <div className="container grid grid-cols-3  lg:grid-cols-5 gap-12">
          {data.data
            .slice(-10)
            .reverse()
            .map((book: any) => (
              // <Link  }>
              <BookCard key={book._id} book={book} />
              // </Link>
            ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default Books;

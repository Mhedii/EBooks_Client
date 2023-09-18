/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  // useGetBooksQuery,
  useGetFilteredBooksQuery,
} from '@/redux/features/books/bookApi';
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs';
import { useState } from 'react';
import BookCard from '../Home/BookCard';

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState('');

  const { data } = useGetFilteredBooksQuery({ searchTerm, filters });
  // const { data } = useGetFilteredBooksQuery(filters);

  const [isFilter, setIsFilter] = useState(false);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const addFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(event?.target.value);
  };
  return (
    <div className="">
      <div className=" grid grid-cols-3">
        <div className="col-start-2 flex ">
          <input
            type="text"
            placeholder="Search here...."
            className="input input-bordered  input-md w-full  "
            value={searchTerm}
            onChange={handleSearch}
          />

          {isFilter ? (
            <>
              <div>
                <div>
                  <BsFilterRight
                    className="text-3xl my-2 ml-2 rounded bg-slate-200 hover:cursor-pointer"
                    onClick={() => setIsFilter(false)}
                  />
                </div>

                <div
                  className="dropdown 
                text-center"
                >
                  <div className="rounded-xl  bg-purple-100 px-2 py-2 ">
                    <input
                      type="text"
                      placeholder="Year"
                      className="mb-1  w-20  input input-bordered input-sm"
                      value={filters}
                      onChange={addFilter}
                    />

                    <input
                      type="text"
                      placeholder="genre"
                      className=" mb-1 input input-bordered input-sm w-20 "
                      onBlur={setFilters}
                    />

                    <button
                      className=" mb-1 btn btn-accent btn-sm text-white"
                      onClick={() => console.log(filters)}
                    >
                      Filter
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <BsFilterLeft
                className=" text-3xl my-2 ml-2   hover:cursor-pointer"
                onClick={() => setIsFilter(true)}
              />
            </>
          )}
        </div>
      </div>

      {data ? (
        <div className="container mt-10 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-12">
          {data.data.map((book: any) => (
            <BookCard book={book} key={book._id} />
          ))}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default AllBooks;

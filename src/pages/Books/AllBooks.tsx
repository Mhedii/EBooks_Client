import {
  // useGetBooksQuery,
  useGetFilteredBooksQuery,
} from '@/redux/features/books/bookApi';
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs';
import { useState } from 'react';
import BookCard from '../Home/BookCard';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const { data } = useGetBooksQuery({ search: searchTerm });
  // const searchTerms = 'Genre';
  const { data, isLoading } = useGetFilteredBooksQuery(searchTerm);

  // const { data } = useGetFilteredBooksQuery({
  //   title: searchTerm,
  //   author: '',
  //   genre: '',
  // });
  // const { data2 } = useGetFilteredBooksQuery({
  //   title: '',
  //   author: searchTerm,
  //   genre: '',
  // });
  // const { data3 } = useGetFilteredBooksQuery({
  //   title: '',
  //   author: '',
  //   genre: searchTerm,
  // });

  const [isFilter, setIsFilter] = useState(false);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // console.log(searchTerm);
  // const searchTerm = 'Genre'; // Your search term
  // fetch(`http://localhost:5000/api/v1/books/allbooks/?genre=${searchTerm}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => console.error(error));

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
        <div className="container mt-10 grid grid-cols-2 lg:grid-cols-5 gap-12">
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

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetFilteredBooksQuery } from '@/redux/features/books/bookApi';
import { BsFilterLeft, BsFilterRight } from 'react-icons/bs';
import { useState } from 'react';
import BookCard from '../Home/BookCard';
import { useForm } from 'react-hook-form';

const AllBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const { handleSubmit, register, reset } = useForm();
  const { data } = useGetFilteredBooksQuery({ searchTerm, filters });
  // const { data } = useGetFilteredBooksQuery(filters);

  const [isFilter, setIsFilter] = useState(false);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const onSubmit = async (data: any) => {
    // let filterString = '';
    const filter = {
      genre: data.genre,
      publicaitonYear: data.year,
    };

    // data.genre
    //   ? (filterString += `genre=${data.genre}&`)
    //   : (filterString += `genre=''&`);
    // data.year
    //   ? (filterString += `publicaitonYear=${data.year}`)
    //   : (filterString += `publicaitonYear=''`);
    // data.genre
    //   ? (filterString += `genre=${data.genre}&`)
    //   : (filterString += `genre=''&`);
    // data.year
    //   ? (filterString += `publicaitonYear=${data.year}`)
    //   : (filterString += `publicaitonYear=''`);
    // setYear(data.Year);
    setFilters(filter);
    // console.log(filters);

    // const review = data.review;
    // await AddReview({
    //   _id,
    //   data: {
    //     reviews: [review],
    //   },
    // });
    // setAllReview([...allReview, review]);
    // toast('Review Added Successfully');
    // reset();

    // const a = data.data.filter((item) => {
    //   if (item.genre && item.year) {
    //     return item.genre === genre && item.publicaitonYear === year;
    //   } else if (genre) {
    //     return item.genre === genre;
    //   } else if (year) {
    //     return item.publicaitionYear === year;
    //   }
    //   return true;
    // });
    // console.log('a', a);
  };

  // const filteredData = (data) => {
  //   console.log('Aita', data);
  //   data.data.filter((item) => {
  //     if (item.genre && item.year) {
  //       return item.genre === genre && item.publicaitonYear === year;
  //     } else if (genre) {
  //       return item.genre === genre;
  //     } else if (year) {
  //       return item.publicaitionYear === year;
  //     }
  //     return true;
  //   });
  // };
  // console.log(() => filteredData);

  console.log(filters);
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        placeholder="Year"
                        className="mb-1  w-20  input input-bordered input-sm"
                        {...register('year')}
                      />

                      <input
                        type="text"
                        placeholder="genre"
                        {...register('genre')}
                        className=" mb-1 input input-bordered input-sm w-20 "
                      />
                      <button
                        className=" mb-1 btn btn-accent btn-sm text-white"
                        type="submit"
                      >
                        Filter
                      </button>
                    </form>
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

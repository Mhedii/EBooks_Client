/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  // moveBookToFinished,
  moveBookToReading,
} from '@/redux/features/books/booksSlice';
import { useAppDispatch } from '@/redux/hook';
import { useState } from 'react';
import { BsBookmark, BsBookmarkPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const BookCard = (book: any) => {
  const { title, author, genre, publicaitonDate, _id } = book.book;
  const [isMark, setIsMark] = useState(false);
  // const { data } = useGetBooksQuery({});
  const dispatch = useAppDispatch();
  const handleCancel = (_id: any) => {
    // dispatch(moveBookToReading(_id));
    setIsMark(false);
  };
  const handleActive = (_id: any) => {
    // dispatch(moveBookToFinished(_id));
    dispatch(moveBookToReading(book.book));
    setIsMark(true);
  };
  // <Link key={book._id} to={`/books/${book._id}}`>
  return (
    <div className="card  bg-base-100 shadow-2xl shadow-black  hover:scale-110">
      <div className="card-body">
        <Link key={book._id} to={`/books/${_id}`}>
          <div>
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
              className="rounded-xl image-full h-40 w-40"
              alt=""
            />
            <h2 className="card-title  lg:text-lg text-sm ">{title}</h2>
            <div className="badge badge-secondary lg:text-sm text-xs">
              {author}
            </div>
            <p className="lg:text-sm text-xs">
              <span className="font-semibold">Genre:</span> {genre}
            </p>
            <p className="lg:text-sm text-xs">
              <span className="font-semibold">Publish Date:</span>{' '}
              {publicaitonDate}
            </p>
          </div>
        </Link>

        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline lg:text-sm text-xs">Finance</div> */}
          {/* <div className="badge badge-outline lg:text-sm text-xs">Fiction</div> */}
          {isMark ? (
            <BsBookmark
              onClick={handleCancel}
              className="text-xl hover:cursor-pointer"
            />
          ) : (
            <BsBookmarkPlus
              onClick={handleActive}
              className="text-xl hover:cursor-pointer"
            />
          )}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

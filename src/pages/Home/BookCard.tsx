/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  moveBookToFinished,
  // moveBookToFinished,
  moveBookToReading,
} from '@/redux/features/books/booksSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { useEffect, useState } from 'react';
import { BsBookmark, BsBookmarkPlus } from 'react-icons/bs';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const BookCard = (book: any) => {
  const { title, author, genre, publicaitonDate, _id } = book.book;
  const [isMark, setIsMark] = useState(false);
  const [isFinishMark, setIsFinishMark] = useState(false);
  // const { data } = useGetBooksQuery({});
  const dispatch = useAppDispatch();
  const isReading = useAppSelector((state) => state.books.readingList);
  const isFinished = useAppSelector((state) => state.books.finishedList);

  const handleCancel = (_id: any) => {
    setIsMark(false);
  };
  const handleActive = (_id: any) => {
    dispatch(moveBookToReading([book.book]));

    setIsMark(true);
  };
  const handleFinished = (_id: any) => {
    dispatch(moveBookToFinished([book.book]));
    setIsFinishMark(true);
  };
  useEffect(() => {
    isReading.map((match) => {
      if (match._id == _id) {
        setIsMark(true);
      }
    });
    isFinished.map((finish) => {
      if (finish._id == _id) {
        setIsFinishMark(true);
      }
    });
  }, [_id]);

  return (
    <div className="card  bg-base-100 shadow-2xl shadow-black  hover:scale-110">
      <div className="card-body mb-5">
        <Link key={book._id} to={`/books/${_id}`}>
          <div>
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
              className="rounded-xl image-full h-40 w-40 "
              alt=""
            />
            <h2 className="card-title  lg:text-lg text-sm ">
              {title?.length > 25 ? title.substring(0, 25) + '.....' : title}
            </h2>
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

        <div className="card-actions justify-end absolute  bottom-5 right-5 ">
          {isMark ? (
            <BsBookmark
              onClick={handleCancel}
              className="text-2xl hover:cursor-pointer"
            />
          ) : (
            <BsBookmarkPlus
              onClick={handleActive}
              className="text-2xl hover:cursor-pointer"
            />
          )}
          {isFinishMark ? (
            <>
              <IoCheckmarkDoneCircleSharp className="text-2xl text-green-700" />
            </>
          ) : (
            <button onClick={handleFinished} className="btn btn-accent btn-xs">
              Finish
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;

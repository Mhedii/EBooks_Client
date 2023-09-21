/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useAddBookMutation } from '@/redux/features/books/bookApi';
import { toast } from 'react-toastify';
const AddBook = () => {
  const [selected, setSelected] = React.useState<Date>();
  const [isOpen, setIsOpen] = useState(false);

  interface IaddBookData {
    // image: File;
    title: string;
    author: string;
    anotherAuthor?: string;
    genre: string;
    publicaitonYear: number;
    publicaitonDate: string;
    reviews?: number;
  }
  const { register, handleSubmit, reset } = useForm<IaddBookData>();
  const handleisOpen = () => {
    setIsOpen(!isOpen);
  };

  const [AddBook] = useAddBookMutation();

  const onSubmit = (data: any) => {
    const options = {
      // image: data.image,
      title: data.title,
      author: data.author,
      anotherAuthor: data.anotherAuthor,
      genre: data.genre,
      publicaitonYear: format(selected!, 'Y'),
      publicaitonDate: format(selected!, 'P'),
      reviews: 4,
    };
    AddBook(options);
    toast('Book Added Successfully');
    setIsOpen(!isOpen);
    reset();
  };

  return (
    <div>
      <div className="container grid grid-cols-3 items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-start-2 grid grid-cols-1  mb-20"
        >
          <div>
            {/* <label className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 ">
              Add Cover
              <input
                {...register('image')}
                id="fileInput"
                accept="image/*"
                type="image"
                className="  inset-0  w-0 opacity-0 cursor-pointer"
              />
            </label> */}
          </div>
          <div className="relative rounded-md overflow-hidden"></div>
          <br />
          <label>Book Title</label>
          <input
            {...register('title', { required: true })}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Author</label>
          <input
            {...register('author', { required: true })}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <p>Or Add Other Author:</p>
          <input
            {...register('anotherAuthor')}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Genre</label>
          <input
            {...register('genre', { required: true })}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <div>
            <label className="mr-3">Publication Date:</label>
            {isOpen ? (
              <DayPicker
                {...register('publicaitonDate')}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                onDayClick={() => setIsOpen(false)}
              />
            ) : (
              <button
                className="btn-primary rounded py-1 px-2"
                onClick={handleisOpen}
              >
                {selected ? format(selected, 'P') : 'Pick the Date'}
              </button>
            )}
          </div>
          <br />
          <button type="submit" className="btn btn-primary w-96">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

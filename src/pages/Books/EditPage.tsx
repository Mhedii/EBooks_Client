import React, { FormEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {
  useAddBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} from '@/redux/features/books/bookApi';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
const EditBook = () => {
  const { id } = useParams();
  const { data } = useSingleBookQuery(id);
  interface IaddBookData {
    title: string;
    author: string;
    anotherAuthor?: string;
    genre: string;
    publicaitonYear: number;
    publicaitonDate: string;
  }
  const {
    title,
    author,
    publicaitonDate,

    anotherAuthor,
    genre,
  } = data.data;

  const [selected, setSelected] = useState(new Date(publicaitonDate));
  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<IaddBookData>();
  const handleisOpen = () => {
    setIsOpen(!isOpen);
  };

  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IaddBookData> = (data) => {
    const options = {
      // image: data.image,
      title: data?.title,
      author: data?.author,
      anotherAuthor: data?.anotherAuthor,
      genre: data?.genre,
      publicaitonYear: format(selected, 'Y'),
      publicaitonDate: format(selected, 'P'),
      // reviews: 4,
    };
    updateBook(options);
    toast('Book Update Successfully');
    reset();
    navigate('/');
  };
  return (
    <div>
      <div className="container grid grid-cols-3 items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-start-2 grid grid-cols-1  mb-20"
        >
          <div></div>
          <div className="relative rounded-md overflow-hidden"></div>
          <br />
          <label>Book Title</label>
          <input
            {...register('title')}
            type="text"
            defaultValue={title}
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Author</label>
          <input
            {...register('author')}
            type="text"
            defaultValue={author}
            className="input input-bordered input-md w-full "
          />
          <br />
          <p>Or Add Other Author:</p>
          <input
            {...register('anotherAuthor')}
            type="text"
            defaultValue={anotherAuthor}
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Genre</label>
          <input
            {...register('genre')}
            type="text"
            defaultValue={genre}
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

export default EditBook;

/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import {
  useSingleBookQuery,
  useUpdateBookMutation,
} from '@/redux/features/books/bookApi';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

interface IaddBookData {
  data: {
    data: {
      _id: any;
      title: any;
      author: any;
      publicaitonDate: any;
      anotherAuthor: any;
      genre: any;
    };
    title: string;
    author: string;
    anotherAuthor?: string;
    genre: string;
    publicaitonYear: number;
    publicaitonDate: string;
  };
}

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm<IaddBookData>();
  const handleisOpen = () => {
    setIsOpen(!isOpen);
  };

  const { data } = useSingleBookQuery(id!) as IaddBookData;
  const { _id, title, author, publicaitonDate, anotherAuthor, genre } =
    data.data;

  // const [selected] = useState(new Date(publicaitonDate));
  // const [selected, setSelected] = React.useState<Date>(publicaitonDate);
  const [selected, setSelected] = React.useState<Date>(
    new Date(publicaitonDate)
  );

  const [updateBook] = useUpdateBookMutation();

  const onSubmit = async (data: any) => {
    const options = {
      _id,
      data: {
        title: data.data.title,
        author: data.data.author,
        anotherAuthor: data.data.anotherAuthor,
        genre: data.data.genre,
        publicaitonYear: format(selected, 'Y'),
        publicaitonDate: format(selected, 'P'),
      },
      // reviews: 4,
    };

    try {
      updateBook(options);
      toast('Book Update Successfully');
      reset();
      navigate('/');
    } catch (error) {
      toast('Update Unsuccessfull');
    }
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
            {...register('data.title')}
            type="text"
            defaultValue={title}
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Author</label>
          <input
            {...register('data.author')}
            type="text"
            defaultValue={author}
            className="input input-bordered input-md w-full "
          />
          <br />
          <p>Or Add Other Author:</p>
          <input
            {...register('data.anotherAuthor')}
            type="text"
            defaultValue={anotherAuthor}
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Genre</label>
          <input
            {...register('data.genre')}
            type="text"
            defaultValue={genre}
            className="input input-bordered input-md w-full "
          />
          <br />
          <div>
            <label className="mr-3">Publication Date:</label>
            {isOpen ? (
              <DayPicker
                {...register('data.publicaitonDate')}
                mode="single"
                selected={selected}
                // onSelect={setSelected}
                onSelect={(value: Date | undefined) => {
                  if (value) {
                    setSelected(value);
                  }
                  setIsOpen(false);
                }}
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

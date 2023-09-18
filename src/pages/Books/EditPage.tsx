/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
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
  const { title, author, publicaitonDate, anotherAuthor, genre } = data.data;

  const [selected] = useState(new Date(publicaitonDate));
  const [updateBook] = useUpdateBookMutation();
  const onSubmit: SubmitHandler<IaddBookData> = () => {
    const options = {
      title: title,
      author: author,
      anotherAuthor: anotherAuthor,
      genre: genre,
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

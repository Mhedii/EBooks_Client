import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AddBook = () => {
  const [selected, setSelected] = React.useState<Date>();
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm();
  const handleisOpen = (e) => {
    setIsOpen(!isOpen);
  };
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="container grid grid-cols-3 items-center ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-start-2 grid grid-cols-1  mb-20"
        >
          <div>
            <label className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-xl shadow-md transition duration-300 ">
              Add Cover
              <input
                {...register('file')}
                id="fileInput"
                type="file"
                className="  inset-0  w-0 opacity-0 cursor-pointer"
              />
            </label>
          </div>

          <div className="relative rounded-md overflow-hidden"></div>

          <br />
          <label>Book Title</label>
          <input
            {...register('title')}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />

          <label>Author</label>
          <input
            {...register('author')}
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
            {...register('genre')}
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <div>
            <label className="mr-3">Publication Date:</label>
            {isOpen ? (
              <DayPicker
                {...register('publicationDate')}
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
                {selected ? format(selected, 'PP') : 'Pick the Date'}
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

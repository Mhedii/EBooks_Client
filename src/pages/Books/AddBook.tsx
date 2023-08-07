import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const AddBook = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
      selected={date}
      onChange={handleDateChange}
      showTimeSelect
      dateFormat="Pp"
      />
      <div className="container grid grid-cols-3 items-center ">
        <form className="col-start-2 grid grid-cols-1 ">
          <div>
            <label className=" cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md shadow-md transition duration-300">
              Add Cover
            </label>
            <input
              id="fileInput"
              type="file"
              className=" absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <div className="relative rounded-md overflow-hidden"></div>

          <br />
          <label>Book Title</label>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />

          <label>Author</label>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <p>Or Add Other Author:</p>

          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />

          <br />
          <label>Genre</label>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <label>Publication Date</label>
          <input
            type="text"
            placeholder="Type Here"
            className="input input-bordered input-md w-full "
          />
          <br />
          <button className="btn btn-primary w-96"> Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;

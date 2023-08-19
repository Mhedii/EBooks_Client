import { createSlice } from '@reduxjs/toolkit';

interface IBook {
  title: string;
  author: string;
  genre: string;
  publicaitonYear: number;
  publicaitonDate: string;
  reviews: number;
}
const initialState: IBook = {
  title: '',
  author: '',
  genre: '',
  publicaitonYear: 2000,
  publicaitonDate: '',
  reviews: 5,
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    books: (state, action) => {
      console.log(state, action);
    },
  },
});

export const { books } = booksSlice.actions;
export default booksSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    book: () => {
      console.log('object');
    },
  },
});

export const { book } = booksSlice.actions;
export default booksSlice.reducer;

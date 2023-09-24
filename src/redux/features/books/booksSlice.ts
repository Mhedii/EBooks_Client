import { createSlice } from '@reduxjs/toolkit';

interface IBook {
  title: string;
  author: string;
  genre: string;
  publicaitonYear: number;
  publicaitonDate: string;
  reviews: number;
  isMarked: boolean;
  searchTerm: string;
  wishlist: object;
  readingList: object[];
  finishedList: object[];
}
const initialState: IBook = {
  title: '',
  author: '',
  genre: '',
  publicaitonYear: 2000,
  publicaitonDate: '',
  reviews: 5,
  isMarked: false,
  searchTerm: '',
  wishlist: [],
  readingList: [],
  finishedList: [],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    books: (state, action) => {
      state = action.payload;
    },
    moveBookToReading(state, action) {
      state.readingList = [...state.readingList, ...action.payload];
    },
    moveBookToFinished(state, action) {
      state.finishedList = [...state.finishedList, ...action.payload];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { books, moveBookToReading, moveBookToFinished } =
  booksSlice.actions;
export default booksSlice.reducer;

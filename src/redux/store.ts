import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import bookReducer from './features/books/booksSlice';
import authReducer from './features/auth/authSlice';
const store = configureStore({
  reducer: {
    books: bookReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://eb-ooks-backend.vercel.app/api/v1',
    baseUrl: 'http://localhost:5000/api/v1/',
  }),
  tagTypes: ['IBook', 'books', 'auth'],
  endpoints: () => ({}),
});

import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/allbooks',
    }),
    AddBook: builder.mutation({
      query: (data) => ({
        url: `books/add-book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
  }),
});
export const { useGetBooksQuery, useAddBookMutation } = bookApi;

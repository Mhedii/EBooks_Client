import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/allbooks',
    }),
    singleBook: builder.query<object, string>({
      query: (id) => `/books/${id}`,
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
export const { useGetBooksQuery, useSingleBookQuery, useAddBookMutation } =
  bookApi;

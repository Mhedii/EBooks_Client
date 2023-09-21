import { api } from '@/redux/api/apiSlice';
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/allbooks',
    }),
    getByFilter: builder.query({
      query: (filters) => ({
        url: `books/allbooks/?publicaitonYear=${filters || ''}&?genre=${
          filters || ''
        }`,
      }),
    }),
    getFilteredBooks: builder.query({
      query: ({ searchTerm, filters }) => ({
        url: `books/allbooks/?title=${searchTerm}&?author=${
          searchTerm || ''
        }&?genre=${searchTerm || ''}
        &?genre=${filters || ''}
        &?publicaitonYear=${filters || ''}`,
      }),
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
    AddReview: builder.mutation({
      query: ({ _id, data }) => ({
        url: `books/${_id}/reviews`,
        method: 'POST',
        body: data,
      }),

      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books'],
    }),
    updateBookStatus: builder.mutation<void, { id: number; status: string }>({
      query: ({ id, status }) => ({
        url: `books/${id}`,
        method: 'PATCH',
        body: { status },
      }),
    }),
  }),
});
export const {
  useGetBooksQuery,
  useUpdateBookStatusMutation,
  useGetFilteredBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useGetByFilterQuery,
  useAddReviewMutation,
} = bookApi;

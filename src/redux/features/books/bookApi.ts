import { api } from '@/redux/api/apiSlice';
const searchOption = ['title', 'author', 'genre'];
const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books/allbooks',
    }),
    getFilteredBooks: builder.query({
      query: (searchTerm) => ({
        url: `books/allbooks/?title=${searchTerm}&?author=${
          searchTerm || ''
        }&?genre=${searchTerm || ''}`,
      }),
      // query: (params) => {
      // const queryParams = searchOption.map((a) => `${a}=${params}`).join('|');
      // const matchingOption = searchOption.find((a) => params[a]);
      // let matchingOption = null;
      // for (const option of searchOption) {
      //   if (params[option] !== null && params[option] !== undefined) {
      //     matchingOption = option;
      //     break;
      //   }
      // }
      // if (!matchingOption) {
      //   // return ; // No matching search option found
      //   console.log('object');
      // }
      // const queryParams = `${matchingOption}=${params[matchingOption]}`;
      // console.log('Another', matchingOption, 'Query', queryParams);
      // return {
      //   url: `/books/allbooks/?${queryParams}`,
      // };

      // },
    }),
    // getFilteredBooks: builder.query({
    //   query: (params) => ({
    //     url: `/books/allbooks/?${searchOption.map(
    //       (search) => search
    //     )}=${params}`,
    //     params: {
    //       search: params,

    //     },
    //   }),
    // }),
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
} = bookApi;

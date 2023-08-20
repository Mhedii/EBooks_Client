import { api } from '@/redux/api/apiSlice';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getuser: builder.query({
      query: () => '/auth/setUser',
    }),
  }),
});
export const { useGetuserQuery } = authApi;

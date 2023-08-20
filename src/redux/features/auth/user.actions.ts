import { useDispatch } from 'react-redux';
import { setUser, setLoading, setAuthError, setAdmin } from './authSlice';

export const useAuthActions = () => {
  const dispatch = useDispatch();
  interface User {
    email: string;
    displayName: string;
  }
  return {
    setUser: (user: User | null) => dispatch(setUser(user)),
    setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
    setAuthError: (error: string) => dispatch(setAuthError(error)),
    setAdmin: (isAdmin: boolean) => dispatch(setAdmin(isAdmin)),
  };
};

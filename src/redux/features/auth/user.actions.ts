import { useDispatch } from 'react-redux';
import { setUser, setLoading, setAuthError, setAdmin } from './authSlice';

export const useAuthActions = () => {
  const dispatch = useDispatch();

  return {
    setUser: (user: any | null) => dispatch(setUser(user)),
    setLoading: (isLoading: boolean) => dispatch(setLoading(isLoading)),
    setAuthError: (error: string) => dispatch(setAuthError(error)),
    setAdmin: (isAdmin: boolean) => dispatch(setAdmin(isAdmin)),
  };
};

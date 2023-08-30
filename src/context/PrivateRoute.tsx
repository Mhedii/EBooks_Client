import { useAppSelector } from '@/redux/hook';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }: any) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;

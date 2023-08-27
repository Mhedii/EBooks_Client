import { useAppSelector } from '@/redux/hook';

import { Navigate, Route, RouteProps } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, ...rest }: any) => {
//   const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
//     />
//   );
// };
const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;

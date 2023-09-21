import App from '@/App';
import PrivateRoute from '@/context/PrivateRoute';
import AllBooks from '@/pages/Books/AllBooks';
import EditBook from '@/pages/Books/EditPage';
import SingleBook from '@/pages/Books/SingleBook';
import AddBook from '@/pages/DashBoard/Books/AddBook';
import Books from '@/pages/Home/Books';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Registration/Login';
import Signup from '@/pages/Registration/Signup';
import WishList from '@/pages/WishList/WishList';
// import { useGetuserQuery } from '@/redux/features/auth/authApi';
// import { useAppSelector } from '@/redux/hook';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/allbooks',
        element: <AllBooks />,
      },
      {
        path: '/books/:id',
        element: <SingleBook />,
      },

      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/wishlist',
        element: <WishList />,
      },
      // {
      //   path: '/dashboard',
      //   element: <DashBoard />,
      // },
      {
        path: '/addbook',
        // element: <AddBook />,
        element: <PrivateRoute path="/addbook" element={<AddBook />} />,
      },
      {
        path: '/editbook/:id',
        element: <EditBook />,
      },
    ],
  },
]);

export default routes;

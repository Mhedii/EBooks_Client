import App from '@/App';
import SingleBook from '@/pages/Books/SingleBook';
import AddBook from '@/pages/DashBoard/Books/AddBook';
import Books from '@/pages/Home/Books';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Registration/Login';
import Signup from '@/pages/Registration/Signup';
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
        element: <Books />,
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
      // {
      //   path: '/dashboard',
      //   element: <DashBoard />,
      // },
      {
        path: '/addbook',
        element: <AddBook />,
      },
    ],
  },
]);

export default routes;

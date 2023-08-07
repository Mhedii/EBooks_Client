import App from '@/App';
import AddBook from '@/pages/Books/AddBook';
import Books from '@/pages/Home/Books';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Registration/Login';
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
        path: '/allbooks',
        element: <Books />,
      },
      {
        path: '/add-book',
        element: <AddBook />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default routes;

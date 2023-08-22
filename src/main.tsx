import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store.ts';
import AuthProvider from './context/authProvider.ts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={routes} />
        <ToastContainer />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

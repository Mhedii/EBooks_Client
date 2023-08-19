import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routes from './routes/routes.tsx';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './redux/store.ts';
import AuthProvider from './context/authProvider.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

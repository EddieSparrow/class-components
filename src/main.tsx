import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './components/Pagination/pagination.css';
import './components/Details/details.css';
import EmptyPage from './components/EmptyPage/EmptyPage.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import { FilmsProvider } from './components/films/FilmsContext.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './components/Details/Details.tsx';
import { Provider } from 'react-redux';
import { store } from './store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <EmptyPage />,
  },
  {
    path: '/search/:pageNumber',
    element: <App />,
  },
  {
    path: '/?frontpage=2&details=:filmID',
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <FilmsProvider>
          <RouterProvider router={router} />
        </FilmsProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

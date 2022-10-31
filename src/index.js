import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root'
import ErrorPage from './routes/errorPage/ErrorPage';
import Setting from './routes/setting/Setting';
import Report from './routes/report/Report'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);



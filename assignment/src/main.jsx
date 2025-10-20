
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './index.css'; 
import RootLayout from './components/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AppsPage from './pages/AppsPage.jsx';
import InstallationPage from './pages/InstallationPage.jsx';
import AppDetailsPage from './pages/AppDetailsPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import AppNotFoundErrorPage from './pages/AppNotFoundErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: "apps",
        element: <AppsPage />,
      },
      {
        path: "apps/:appId", 
        element: <AppDetailsPage />,
      },
      {
        path: "installation",
        element: <InstallationPage />,
      },
      {
        path: "error/app-not-found",
        element: <AppNotFoundErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {}
    <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
    />
  </React.StrictMode>,
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import swDev from './swDev';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { AppContext } from './store/context/AppContext';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContext>
       <ToastContainer/>
        <RouterProvider router={router}/>
    </AppContext>
  </React.StrictMode>
);
swDev()
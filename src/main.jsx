import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from './router.jsx';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);

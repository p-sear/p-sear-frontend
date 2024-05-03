import React from 'react';

import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from './router.jsx';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

import { AuthProvider } from './contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Header />
        <RouterProvider router={router} />
      <Footer />
    </AuthProvider>
  </React.StrictMode>,
);

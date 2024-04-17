import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import MyApp from './pages/HotelInquiry/MyApp';
 


export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '/myapp',
    element: <MyApp />
    ,
  },


]);

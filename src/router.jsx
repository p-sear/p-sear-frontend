import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Home/Main';
import ProfilePage from './pages/Profile';
import MyApp from './pages/HotelInquiry/MyApp';
import HotelDetail from './pages/HotelDetails/HotelDetail';
import ReviewRegister from './pages/Review/register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  
  {
    path: '/myapp',
    element: <MyApp />,
  },

  {
    path: '/hotel-detail',
    element: <HotelDetail />,
  },



  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

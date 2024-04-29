import { createBrowserRouter } from 'react-router-dom';

import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import MyApp from './pages/HotelInquiry/MyApp';
import HotelReservation from './pages/HotelReservation/hotelReservation';
import HotelReservation2 from './pages/HotelReservation/hotelReservation2';
import ProfilePage from './pages/Profile';
import ReviewRegister from './pages/Review/register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/login',
    element: <AccountForm />,
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
    path: '/hotel-reservation',
    element: <HotelReservation></HotelReservation>,
  },
  {
    path: '/hotel-reservation2',
    element: <HotelReservation2></HotelReservation2>,
  },
  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

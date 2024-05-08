import { createBrowserRouter } from 'react-router-dom';

import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import Auction from './pages/HotelAution/auction';
import HotelDetail from './pages/HotelDetails/HotelDetail';
import MyApp from './pages/HotelInquiry/MyApp';
import StepProgress from './pages/HotelRegistration/StepProgress';
import HotelReservation from './pages/HotelReservation/hotelReservation';
import HotelReservation2 from './pages/HotelReservation/hotelReservation2';
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
    path: '/step',
    element: <StepProgress />,
  },

  {
    path: '/myapp',
    element: <MyApp />,
  },
  {
    path: '/hotel-auction',
    element: <Auction />,
  },
  {
    path: '/hotel-detail',
    element: <HotelDetail />,
  },

  {
    path: '/hotel-reservation',
    element: <HotelReservation />,
  },
  {
    path: '/hotel-reservation2',
    element: <HotelReservation2 />,
  },

  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

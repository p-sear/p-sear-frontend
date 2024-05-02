import { createBrowserRouter } from 'react-router-dom';

import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import Auction from './pages/HotelAution/auction';
import MyApp from './pages/HotelInquiry/MyApp';
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
    path: '/hotel-auction',
    element: <Auction />,
  },
  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

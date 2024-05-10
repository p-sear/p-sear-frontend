import { createBrowserRouter } from 'react-router-dom';

import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import MyApp from './pages/HotelInquiry/MyApp';
import StepProgress from './pages/HotelRegistration/StepProgress';
import MyPage from './pages/MyPage/MyPage';
import ReviewRegister from './pages/Review/register';
import ServiceCenter from './pages/ServiceCenter/index';

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
    path: '/profile/*',
    element: <MyPage />,
  },

  {
    path: '/myapp',
    element: <MyApp />,
  },
  {
    path: '/hotel/new',
    element: <StepProgress />,
  },

  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
  {
    path: '/service-center',
    element: <ServiceCenter />,
  },
]);

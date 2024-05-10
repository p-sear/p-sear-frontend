import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Home/Main';
import MyPage from './pages/MyPage/MyPage';
import MyApp from './pages/HotelInquiry/MyApp';

import AccountForm from './pages/Account/AccountForm';
import StepProgress from './pages/HotelRegistration/StepProgress';
 

import ReviewRegister from './pages/Review/register';

import MapModal from './components/Modal/MapModal';

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
    element: <MyPage />
  },
  
  {
    path: '/myapp',
    element: <MyApp />
    ,
  },
  {
    path: '/hotel/new',
    element: <StepProgress />
  },
  {
    path: 'mapmodal',
    element: <MapModal />
  },
  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Home/Main';
import ProfilePage from './pages/Profile';
import MyApp from './pages/HotelInquiry/MyApp';
 

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
    element: <MyApp />
    ,
  },


  {
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

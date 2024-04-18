import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Home/Main';
import ProfilePage from './pages/Profile';
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
    path: '/review-register',
    element: <ReviewRegister />,
  },
]);

import { createBrowserRouter } from 'react-router-dom';

import Main from './pages/Home/Main';
import ProfilePage from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

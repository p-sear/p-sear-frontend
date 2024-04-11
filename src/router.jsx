import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
]);

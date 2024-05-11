import { Outlet, createBrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import MyApp from './pages/HotelInquiry/MyApp';
import StepProgress from './pages/HotelRegistration/StepProgress';
import MyPage from './pages/MyPage/MyPage';
import ReviewRegister from './pages/Review/register';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <AccountForm /> },
      { path: '/profile/*', element: <MyPage /> },
      { path: '/myapp', element: <MyApp /> },
      { path: '/hotel/new', element: <StepProgress /> },
      { path: '/review-register', element: <ReviewRegister /> },
    ],
  },
]);

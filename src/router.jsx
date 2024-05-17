import { Outlet, createBrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import AccountForm from './pages/Account/AccountForm';
import Main from './pages/Home/Main';
import Auction from './pages/HotelAution/auction.jsx';
import HotelDetail from './pages/HotelDetails/HotelDetail.jsx';
import MyApp from './pages/HotelInquiry/MyApp';
import StepProgress from './pages/HotelRegistration/StepProgress';
import HotelReservation2 from './pages/HotelReservation/hotelReservation2.jsx';
import HotelReservation from './pages/HotelReservation/hotelReservation.jsx';
import MyPage from './pages/MyPage/MyPage';
import ReviewRegister from './pages/Review/register';

// eslint-disable-next-line react-refresh/only-export-components
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
      { path: '/hotel-detail', element: <HotelDetail /> },
      { path: '/hotel-reservation', element: <HotelReservation /> },
      { path: '/hotel-reservation2', element: <HotelReservation2 /> },
      { path: '/hotel-auction', element: <Auction /> },
    ],
  },
]);

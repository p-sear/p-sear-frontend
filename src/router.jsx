import { Outlet, createBrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import AccountForm from './pages/Account/AccountForm';
import TokenRedirectPage from './pages/Account/TokenRedirectPage.jsx';
import BidableHotelList from './pages/BidableHotel/BidableHotelList.jsx';
import Main from './pages/Home/Main';
import HotelAuction from './pages/HotelAution/HotelAuction.jsx';
import HotelDetail from './pages/HotelDetails/HotelDetail.jsx';
import HotelList from './pages/HotelInquiry/HotelList.jsx';
import StepProgress from './pages/HotelRegistration/StepProgress';
import HotelReservation2 from './pages/HotelReservation/hotelReservation2.jsx';
import HotelReservation3 from './pages/HotelReservation/hotelReservation3.jsx';
import HotelReservation from './pages/HotelReservation/hotelReservation.jsx';
import HotelReservation1 from './pages/HotelReservation/hotelReservation.jsx';
import MyPage from './pages/MyPage/MyPage';
import ReservationDetail from './pages/MyPage/ReservationDetail.jsx';
import Review from './pages/Review/Review';
import ReviewRegister from './pages/Review/register';
import RoomStep from './pages/RoomRegistration/RoomStep.jsx';
import ServiceCenter from './pages/ServiceCenter/index';
import TimeSpecialList from './pages/TimeSpecial/TimeSpecialList.jsx';

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
      { path: '/hotel-list', element: <HotelList /> },
      { path: '/bidable', element: <BidableHotelList /> },
      { path: '/time-special', element: <TimeSpecialList /> },
      { path: '/hotel/new', element: <StepProgress /> },
      { path: '/review-register', element: <ReviewRegister /> },
      { path: '/hotel-detail', element: <HotelDetail /> },
      { path: '/hotel-reservation', element: <HotelReservation /> },
      { path: '/hotel-reservation1', element: <HotelReservation1 /> },
      { path: '/hotel-reservation2', element: <HotelReservation2 /> },
      { path: '/reservation-detail', element: <ReservationDetail /> },
      { path: '/hotel-reservation3', element: <HotelReservation3 /> },
      { path: '/hotel-auction', element: <HotelAuction /> },
      { path: '/service-center', element: <ServiceCenter /> },
      { path: '/review', element: <Review /> },
      { path: '/room/new', element: <RoomStep /> },
      { path: '/token-redirect', element: <TokenRedirectPage /> },
    ],
  },
]);

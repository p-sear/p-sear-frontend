import Search from '../../components/Search/Search';
import ScrollToTop from '../../helpers/ScrollToTop';
import BidableHotel from './BidableHotel';
import RecommendedLocation from './RecommendedLocation';
import TimeSpecials from './TimeSpecials';

const Main = () => {
  const mainStyle = {
    padding: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '100px',
  };

  return (
    <div className='main-container'>
      <ScrollToTop />
      <Search />

      <div style={mainStyle}>
        <RecommendedLocation />
        <BidableHotel />
        <TimeSpecials />
      </div>
    </div>
  );
};

export default Main;

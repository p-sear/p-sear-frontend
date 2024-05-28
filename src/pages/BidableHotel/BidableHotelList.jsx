import { FaArrowAltCircleLeft, FaStar } from 'react-icons/fa';

const BidableHotelList = () => {
  return (
    <div className='bidable-conatiner'>
      <div>
        <a href='/'>
          <FaArrowAltCircleLeft size={'30px'} />
        </a>
        <h1>입찰 가능 숙소</h1>
      </div>

      <div className='bidable-list'></div>
    </div>
  );
};

export default BidableHotelList;

import { FaArrowLeft, FaStar } from 'react-icons/fa';

import pserLoading from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import './BidableHotelList.css';

const BidableHotelList = () => {
  return (
    <div className='bidable flex items-center justify-center'>
      <div className='bidable-container flex flex-col items-center justify-center'>
        <div className='flex w-full items-center gap-5'>
          <a href='/'>
            <FaArrowLeft size={'30px'} />
          </a>
          <h1>입찰 가능 숙소</h1>
        </div>

        <div className='bidable-box flex w-full flex-col'>
          <div className='bidable-search flex items-center justify-center'>
            <div className='comp-wrapper'>
              <DateSelector />
            </div>
            <div className='comp-wrapper'>
              <PeopleSelector />
            </div>
            <button className='search-btn'>검색</button>
          </div>

          <div className='bidable-list w-full'>
            <div className='bidable-card flex w-full items-center justify-center'>
              <img src={pserLoading} alt='' className='h-full object-cover' />

              <div className='bidable-content w-full self-start'>
                <p>3성급 호텔</p>
                <h3>호텔 이름</h3>
                <p>숙소 위치</p>
                <p className='relative'>
                  <FaStar className='star-icon absolute' />
                  별점
                </p>
              </div>

              <div className='w-full self-end'>
                <p className='text-right'>최고 입잘가: 100,000 원</p>
                <p className='text-right'>즉시 입찰가: 150,000 원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidableHotelList;

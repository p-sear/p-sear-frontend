import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

import pserLoading from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import './BidableHotelList.css';

const BidableHotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    axios
      .get('http://localhost:5173/dummy/bidableHotelList.json')
      .then(response => {
        const data = response.data.body.content;
        setHotels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const getCategoryInKorean = category => {
    const categoryMap = {
      HOTEL: '호텔',
      PANSION: '펜션',
    };
    return categoryMap[category] || category;
  };

  const loadMoreHotels = () => {
    setVisibleCount(prevCount => prevCount + 10);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

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
            {hotels.slice(0, visibleCount).map(hotel => (
              <div
                key={hotel.id}
                className='bidable-card flex w-full items-center justify-center'
              >
                <img
                  src={hotel.mainImage || pserLoading}
                  alt={hotel.name}
                  className='h-full object-cover'
                />
                <div className='bidable-content w-full self-start'>
                  <p>{getCategoryInKorean(hotel.category)}</p>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.city}</p>
                  <p className='relative'>
                    <FaStar className='star-icon absolute' />
                    {hotel.rating}
                  </p>
                </div>
                <div className='w-full self-end'>
                  <p className='text-right'>
                    최고 입찰가: {hotel.highestBid} 원
                  </p>
                  <p className='text-right'>
                    즉시 입찰가: {hotel.instantBid} 원
                  </p>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < hotels.length && (
            <button className='load-more-btn w-full' onClick={loadMoreHotels}>
              더 불러오기
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidableHotelList;
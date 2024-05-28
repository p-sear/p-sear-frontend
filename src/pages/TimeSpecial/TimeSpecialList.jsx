import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaArrowLeft, FaStar } from 'react-icons/fa';

import pserLoading from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import './TimeSpecial.css';

const TimeSpecialList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    axios
      .get('http://localhost:5173/dummy/timeSpecialList.json')
      .then(response => {
        const data = response.data.body.content;
        setHotels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('타임 특가 숙소 조회 API 호출 실패:', error);
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
    <div className='timespecial flex items-center justify-center'>
      <div className='timespecial-container flex flex-col items-center justify-center'>
        <div className='flex w-full items-center gap-5'>
          <a href='/'>
            <FaArrowLeft size={'30px'} />
          </a>
          <h1>타임 특가 숙소</h1>
        </div>

        <div className='timespecial-box flex w-full flex-col'>
          <div className='timespecial-search flex items-center justify-center'>
            <div className='comp-wrapper'>
              <DateSelector />
            </div>
            <div className='comp-wrapper'>
              <PeopleSelector />
            </div>
            <button className='search-btn'>검색</button>
          </div>

          <div className='timespecial-list w-full'>
            {hotels.slice(0, visibleCount).map(hotel => (
              <div
                key={hotel.id}
                className='timespecial-card flex w-full items-center justify-center'
              >
                <img
                  src={hotel.mainImage || pserLoading}
                  alt={hotel.name}
                  className='h-full object-cover'
                />
                <div className='timespecial-content w-full self-start'>
                  <p>{getCategoryInKorean(hotel.category)}</p>
                  <h3>{hotel.name}</h3>
                  <p>{hotel.city}</p>
                  <p className='relative'>
                    <FaStar className='star-icon absolute' />
                    {hotel.rating}
                  </p>
                </div>
                <div className='w-full self-end'>
                  <b>타임 특가</b>
                  <span>{hotel.price} 원</span>
                  <span>{hotel.special} 원</span>
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

export default TimeSpecialList;

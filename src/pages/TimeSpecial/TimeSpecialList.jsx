import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import './TimeSpecialList.css';

const TimeSpecialList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    axios
      // .get('http://localhost:5173/dummy/timeSpecialList.json')
      .get('http://1.228.166.90:8000/timesales', {
        params: {
          page: currentPage,
          size: 10,
          sort: ['id'],
        },
      })
      .then(response => {
        const data = response.data.body.content;
        setHotels(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('타임 특가 숙소 조회 API 호출 실패:', error);
        setLoading(false);
      });
  }, [currentPage]);

  const getCategoryInKorean = category => {
    const categoryMap = {
      HOTEL: '호텔',
      PANSION: '펜션',
      POOL: '풀빌라',
      MOTEL: '모텔',
      RESORT: '리조트',
      CAMPING: '캠핑/글램핑',
      GUESTHOUSE: '게스트 하우스',
      HANOK: '한옥',
      HOUSE: '단독 주택',
    };
    return categoryMap[category] || category;
  };

  const loadMoreHotels = () => {
    setCurrentPage(prevPage => prevPage + 1);
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

          <div className='timespecial-list flex w-full flex-col'>
            {hotels.slice(0, visibleCount).map(hotel => (
              <div
                key={hotel.id}
                className='timespecial-card flex w-full items-center justify-center'
                onClick={() => navigate(`/timespecial-detail/${hotel.id}`)}
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
                    {hotel.gradeAverage}
                  </p>
                </div>
                <div className='flex w-full flex-col items-end justify-end self-end'>
                  <p>{hotel.previousPrice} 원</p>
                  <div className='flex items-center gap-2'>
                    <p>타임 특가</p>
                    <p>{hotel.salePrice} 원</p>
                  </div>
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

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import './BidableHotelList.css';

const BidableHotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5173/dummy/bidableHotelList.json')
  //     .then(response => {
  //       const data = response.data.body.content;
  //       setHotels(data);
  //       setLoading(false);
  //     })
  //     .catch(error => {
  //       console.error('입찰 가능 숙소 조회 API 호출 실패:', error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get('http://1.228.166.90:8000/hotels', {
        params: {
          page: 0,
          size: 999,
        },
      })
      .then(response => {
        const data = response.data.body.content;
        const hotelIds = data.map(hotel => hotel.id);

        Promise.all(
          hotelIds.map(id =>
            axios.get(`http://1.228.166.90:8000/auctions/${id}`),
          ),
        )
          .then(responses => {
            const bidableHotels = responses.map(response => response.data.body);
            setHotels(bidableHotels);
            setLoading(false);
          })
          .catch(error => {
            console.error('입찰 가능 숙소 조회 API 호출 실패:', error);
            setLoading(false);
          });
      })
      .catch(error => {
        console.error('전체 호텔 조회 API 호출 실패:', error);
        setLoading(false);
      });
  }, []);

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

          <div className='bidable-list flex w-full flex-col'>
            {hotels.slice(0, visibleCount).map(hotel => (
              <div
                key={hotel.id}
                className='bidable-card flex w-full items-center justify-center'
                onClick={() => navigate('/hotel-auction')}
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
                    {hotel.gradeAverage}
                  </p>
                </div>
                <div className='w-full self-end'>
                  <p className='text-right'>경매 시작가: {hotel.price} 원</p>
                  {/* <p className='text-right'>낙찰가: {hotel.endPrice} 원</p> */}
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

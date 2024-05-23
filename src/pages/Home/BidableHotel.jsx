import { useEffect, useState } from 'react';

import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';

import hotelImg from '../../assets/images/hotel.png';
import './BidableHotel.css';

const BidableHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/bidableHotelList.json',
          {
            params: {
              page: 0,
              size: 4,
              sort: 'string', // 필요한 정렬 기준으로 수정
            },
          },
        );

        // API에서 필요한 데이터만 추출하여 상태에 저장
        const hotelsData = response.data.body.content.map(hotel => ({
          id: hotel.id,
          name: hotel.name,
          location: `${hotel.city}`,
          rating: hotel.rating, // 실제 API에 아직 별점 없음
          highestBid: hotel.highestBid, // 실제 백엔드 API에 아직 최고 입찰가 없는 상태
          instantBid: hotel.instantBid, // 실제 백엔드 API에 아직 즉시 입찰가 없는 상태
          photo: hotel.mainImage || hotelImg, // 이미지가 없는 경우 기본 이미지 사용
        }));

        setHotels(hotelsData);
        setLoading(false);
      } catch (error) {
        console.error('호텔 조회 API 오류:', error);
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bidableHotel-container'>
      <div className='bidableHotel-title flex items-center justify-between'>
        <h1>입찰 가능 숙소</h1>
        <a href='' className='flex items-center justify-center'>
          더보기{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </a>
      </div>

      <div className='bidableHotel-content'>
        {hotels.slice(0, 4).map(hotel => (
          <div
            className='bidableHotel-box flex flex-col justify-center'
            key={hotel.id}
          >
            <img src={hotel.photo} alt='' className='hotel-img' />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p className='relative'>
              <span className='star-icon absolute'>⭐</span> {hotel.rating}
            </p>
            <p>최고 입잘가: {hotel.highestBid} 원</p>
            <p>즉시 입찰가: {hotel.instantBid} 원</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidableHotel;

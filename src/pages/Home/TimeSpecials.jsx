import { useEffect, useState } from 'react';

import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import './TimeSpecials.css';

const TimeSpecials = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          // 'http://localhost:5173/dummy/timeSpecialList.json',
          'http://1.228.166.90:8000/timesales',
          {
            params: {
              page: 0,
              size: 4,
              sort: ['id'],
            },
          },
        );

        const hotelsData = response.data.body.content
          .slice(0, 4)
          .map(hotel => ({
            id: hotel.id,
            name: hotel.name,
            city: `${hotel.city}`,
            gradeAverage: hotel.gradeAverage,
            previousPrice: hotel.previousPrice,
            salePrice: hotel.salePrice,
            photo: hotel.mainImage || pserLoading,
          }));

        setHotels(hotelsData);
      } catch (error) {
        console.error('타임 특가 숙소 조회 API 오류: ', error);
      }
    };

    fetchHotels();
  }, []);

  const navigate = useNavigate();

  const handleClick = hotelId => {
    navigate(`/timespecial-detail/${hotelId}`);
  };

  return (
    <div className='timespecials-container'>
      <div className='timespecials-title flex items-center justify-between'>
        <h1>타임 특가 숙소</h1>
        <a href='/time-special' className='flex items-center justify-center'>
          더보기{' '}
          <span>
            <IoIosArrowForward />
          </span>
        </a>
      </div>

      <div className='timespecials-content'>
        {hotels.map(hotel => (
          <div
            className='timespecials-box flex flex-col justify-center'
            key={hotel.id}
            onClick={() => handleClick(hotel.id)}
          >
            <img src={hotel.photo} alt='' className='hotel-img' />
            <h3>{hotel.name}</h3>
            <p>{hotel.city}</p>
            <p className='relative'>
              <span className='star-icon absolute'>⭐</span>{' '}
              {hotel.gradeAverage}
            </p>
            <b>타임 특가</b>
            <p>
              <span>{hotel.previousPrice}</span> ➡️{' '}
              <span>{hotel.salePrice} 원</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSpecials;

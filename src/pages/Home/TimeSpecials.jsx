import { useEffect, useState } from 'react';

import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';

import hotelImg from '../../assets/images/hotel.png';
import './TimeSpecials.css';

const TimeSpecials = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/timeSpecialList.json',
          {
            params: {
              page: 0,
              size: 4,
              sort: 'string',
            },
          },
        );

        const hotelsData = response.data.body.content
          .slice(0, 4)
          .map(hotel => ({
            id: hotel.id,
            name: hotel.name,
            location: `${hotel.city}`,
            rating: hotel.rating,
            price: hotel.price,
            special: hotel.special,
            photo: hotel.mainImage || hotelImg,
          }));

        setHotels(hotelsData);
      } catch (error) {
        console.error('타임 특가 숙소 조회 API 오류: ', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className='timespecials-container'>
      <div className='timespecials-title flex items-center justify-between'>
        <h1>타임 특가 숙소</h1>
        <a href='' className='flex items-center justify-center'>
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
          >
            <img src={hotel.photo} alt='' className='hotel-img' />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p className='relative'>
              <span className='star-icon absolute'>⭐</span> {hotel.rating}
            </p>
            <b>타임 특가</b>
            <p>
              <span>{hotel.price}</span> ➡️ <span>{hotel.special} 원</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSpecials;

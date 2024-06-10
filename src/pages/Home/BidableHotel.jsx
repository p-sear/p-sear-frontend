import { useEffect, useState } from 'react';

import axios from 'axios';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import Spinner from '../../helpers/Spinner';
import './BidableHotel.css';

const BidableHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PROD_API_SERVER}/search/hotels`, {
        params: {
          page: 0,
          size: 4,
        },
      })
      .then(response => {
        const data = response.data.body.content;
        console.log(data);
        setHotels(data);
        setLoading(false);
        // const hotelIds = data.map(hotel => hotel.id);

        // Promise.all(
        //   hotelIds.map(id =>
        //     axios.get(`https://chiikawa.online/auctions/${id}`),
        //   ),
        // )
        //   .then(responses => {
        //     const bidableHotels = responses.map(
        //       response => response.data.body.content,
        //     );
        //     setHotels(bidableHotels);
        //     setLoading(false);
        //   })
        //   .catch(error => {
        //     console.error('입찰 가능 숙소 조회 API 호출 실패:', error);
        //     setLoading(false);
        //   });
      })
      .catch(error => {
        console.error('전체 호텔 조회 API 호출 실패:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='bidableHotel-container'>
      <div className='bidableHotel-title flex items-center justify-between'>
        <h1>입찰 가능 숙소</h1>
        <a href='/bidable' className='flex items-center justify-center'>
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
            onClick={() => navigate(`/hotel-detail/${hotel.id}`)}
          >
            <img src={hotel.mainImage} alt='' className='hotel-img' />
            <h3>{hotel.name}</h3>
            <p>{hotel.location}</p>
            <p className='flex'>
              <div className='flex-grow'></div>
              <span className='star-icon'>⭐</span>
              <div className='flex-grow'></div>
              {4}
              <div className='flex-grow'></div>
            </p>
            <p>
              최저 가격: {Math.min(...hotel.rooms.map(room => room.price))} 원
            </p>
            <p>
              최고 가격: {Math.max(...hotel.rooms.map(room => room.price))} 원
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BidableHotel;

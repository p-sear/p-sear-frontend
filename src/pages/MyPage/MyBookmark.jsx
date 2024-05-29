import { useEffect, useState } from 'react';

import axios from 'axios';
import { GoHeartFill } from 'react-icons/go';

import pserLoading from '../../assets/images/loading.png';
import './MyBookmark.css';

const MyBookmark = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5173/dummy/bookmark.json')
      .then(response => {
        setReservations(response.data.bookmark);
      })
      .catch(error => {
        console.error('찜 목록 조회 API 호출 에러:', error);
      });
  }, []);

  // 숙소 찜(즐겨찾기) 취소 함수
  const cancelBookmark = hotel_id => {
    axios
      .delete('http://localhost:5173/dummy/bookmark.json', {
        data: { status: 0, hotel_id },
      })
      .then(response => {
        console.log(response.data.message);
        // 즐겨찾기 취소 성공 후 목록 갱신
        setReservations(
          reservations.filter(item => item.hotel_id !== hotel_id.toString()),
        );
      })
      .catch(error => {
        console.error('찜한 숙소 삭제 API 호출 에러:', error);
      });
  };

  return (
    <div className='mybookmark-container flex flex-col'>
      <h1>찜한 숙소</h1>

      <div className='mybookmark-box flex w-full flex-col items-center justify-center'>
        {reservations.map((reservation, index) => (
          <div
            key={index}
            className='mybookmark-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <div className='mybookmark-img relative'>
                <img src={reservation.hotelImage || pserLoading} alt='' />
                <GoHeartFill
                  className='mybookmark-heart absolute'
                  size={'30px'}
                  onClick={() => cancelBookmark(reservation.hotel_id)}
                />
              </div>

              <div className='flex h-full items-center'>
                <div className='flex h-full flex-col justify-evenly'>
                  <p>숙소</p>
                  <p>숙박 가격</p>
                </div>
                <div className='flex h-full flex-col justify-evenly font-bold'>
                  <p>{reservation.hotelName}</p>
                  <p>{reservation.price} 원</p>
                </div>
              </div>
            </div>

            <a href='/hotel-reservation' className='mybook-reserve-btn'>
              예약하기 &gt;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookmark;

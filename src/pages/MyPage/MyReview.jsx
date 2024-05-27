import { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import ScrollToTop from '../../helpers/ScrollToTop';
import './MyReview.css';

const MyReview = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/myReservation.json',
        );
        const data = response.data.body.content;

        // 현재 날짜를 가져와서 체크인/체크아웃 날짜와 비교하여 완료된 예약만 필터링
        const now = new Date();
        const completedReservations = data.filter(reservation => {
          const checkOutDate = new Date(reservation.checkOut);
          return checkOutDate < now;
        });

        setReservations(completedReservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/review-register');
  };

  return (
    <div className='myreview-container flex flex-col'>
      <ScrollToTop />
      <h1>이용 후기</h1>

      <div className='myreview-box flex w-full flex-col items-center justify-center'>
        {reservations.map(reservation => (
          <div
            key={reservation.id}
            className='myreview-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <img
                src={reservation.mainImage || pserLoading}
                alt={reservation.name}
              />

              <div className='flex h-full items-center'>
                <div className='flex h-full flex-col justify-between'>
                  <p>숙소</p>
                  <p>객실</p>
                  <p>체크인/체크아웃</p>
                  <p>결제 금액</p>
                </div>
                <div className='flex h-full flex-col justify-between font-bold'>
                  <p>{reservation.name}</p>
                  <p>{reservation.roomType}</p>
                  <p>
                    {reservation.checkIn} ~ {reservation.checkOut}
                  </p>
                  <p>{reservation.price} 원</p>
                </div>
              </div>
            </div>

            <div className='flex h-full flex-col justify-between'>
              <p className='myrev-fin'>완료됨</p>
              <button className='myrev-btn' onClick={handleClick}>
                이용 후기 작성하기
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;

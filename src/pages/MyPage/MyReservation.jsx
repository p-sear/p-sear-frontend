import { useEffect, useState } from 'react';

import axios from 'axios';

import pserLoading from '../../assets/images/loading.png';
import './MyReservation.css';

const MyReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        // localStorage에서 token 가져오기
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('인증 토큰이 없습니다.');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰 값을 포함한 Authorization 헤더
          },
        };

        const response = await axios.get(
          'http://localhost:5173/dummy/myReservation.json',
          config,
        );

        const myReservationDatas = response.data.body.content.map(
          myReservation => ({
            id: myReservation.id,
            name: myReservation.name,
            roomType: myReservation.roomType,
            checkIn: myReservation.checkIn,
            checkOut: myReservation.checkOut,
            price: myReservation.price,
            photo: myReservation.mainImage || pserLoading,
          }),
        );
        setReservations(myReservationDatas);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  return (
    <div className='myreservation-container flex flex-col'>
      <h1>예약 내역</h1>

      <div className='myreservation-box flex w-full flex-col items-center justify-center'>
        {reservations.map(reservation => (
          <div
            key={reservations.id}
            className='myreservation-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <img src={reservation.photo || pserLoading} alt='' />

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

            <button className='myres-detail-btn'>상세 조회 &gt;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReservation;

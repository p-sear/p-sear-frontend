import { useEffect, useState } from 'react';

import axios from 'axios';

import hotelImg from '../../assets/images/hotel.png';
import './MyReservation.css';

const MyReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/myReservation.json',
        );

        const myReservationDatas = response.data.body.content.map(
          myReservation => ({
            id: myReservation.id,
            name: myReservation.name,
            roomType: myReservation.roomType,
            checkIn: myReservation.checkIn,
            checkOut: myReservation.checkOut,
            price: myReservation.price,
            photo: myReservation.mainImage || hotelImg,
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

  // const reservations = [
  //   {
  //     id: 1,
  //     photo: hotelImg,
  //     name: '호텔 A',
  //     roomType: '스탠다드',
  //     checkIn: '2024.05.20',
  //     checkOut: '2024.05.22',
  //     price: '100,000',
  //   },
  //   {
  //     id: 2,
  //     photo: hotelImg,
  //     name: '호텔 B',
  //     roomType: '스위트',
  //     checkIn: '2024.05.20',
  //     checkOut: '2024.05.22',
  //     price: '100,000',
  //   },
  //   {
  //     id: 3,
  //     photo: hotelImg,
  //     name: '호텔 C',
  //     roomType: '스탠다드',
  //     checkIn: '2024.05.20',
  //     checkOut: '2024.05.22',
  //     price: '100,000',
  //   },
  // ];

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
              <img src={reservation.photo || hotelImg} alt='' />

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

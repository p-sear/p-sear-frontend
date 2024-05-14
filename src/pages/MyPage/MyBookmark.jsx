import { GoHeartFill } from 'react-icons/go';

import hotelImg from '../../assets/images/hotel.png';
import './MyBookmark.css';

const MyBookmark = () => {
  const reservations = [
    {
      id: 1,
      photo: hotelImg,
      name: '호텔 A',
      price: '150,000',
    },
    {
      id: 2,
      photo: hotelImg,
      name: '호텔 B',
      price: '90,000',
    },
    {
      id: 3,
      photo: hotelImg,
      name: '호텔 C',
      price: '88,000',
    },
  ];

  return (
    <div className='mybookmark-container flex flex-col'>
      <h1>찜한 숙소</h1>

      <div className='mybookmark-box flex w-full flex-col items-center justify-center'>
        {reservations.map(reservation => (
          <div
            key={reservations.id}
            className='mybookmark-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <div className='mybookmark-img relative'>
                <img src={reservation.photo} alt='' />
                <GoHeartFill
                  className='mybookmark-heart absolute'
                  size={'30px'}
                />
              </div>

              <div className='flex h-full items-center'>
                <div className='flex h-full flex-col justify-evenly'>
                  <p>숙소</p>
                  <p>숙박 가격</p>
                </div>
                <div className='flex h-full flex-col justify-evenly font-bold'>
                  <p>{reservation.name}</p>
                  <p>{reservation.price} 원</p>
                </div>
              </div>
            </div>

            <button className='mybook-reserve-btn'>예약하기 &gt;</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookmark;

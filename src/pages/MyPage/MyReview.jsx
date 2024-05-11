import hotelImg from '../../assets/images/hotel.png';
import './MyReview.css';

const MyReview = () => {
  const reservations = [
    {
      id: 1,
      photo: hotelImg,
      name: '호텔 A',
      roomType: '스탠다드',
      checkIn: '2024.05.20',
      checkOut: '2024.05.22',
      price: '100,000',
    },
    {
      id: 2,
      photo: hotelImg,
      name: '호텔 B',
      roomType: '스위트',
      checkIn: '2024.05.20',
      checkOut: '2024.05.22',
      price: '100,000',
    },
    {
      id: 3,
      photo: hotelImg,
      name: '호텔 C',
      roomType: '스탠다드',
      checkIn: '2024.05.20',
      checkOut: '2024.05.22',
      price: '100,000',
    },
  ];

  return (
    <div className='myreview-container flex flex-col'>
      <h1>이용 후기</h1>

      <div className='myreview-box flex w-full flex-col items-center justify-center'>
        {reservations.map(reservation => (
          <div
            key={reservations.id}
            className='myreview-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <img src={hotelImg} alt='' />

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
              <button className='myrev-btn'>이용 후기 작성하기</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;

import { useEffect, useState } from 'react';

import axios from 'axios';
import { IoClose } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
const RoomDetail = ({ onClose, hotelId, roomId }) => {
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          //   `http://1.228.166.90:8000/hotels/${hotelId}/rooms/${roomId}`,
          'http://localhost:5173/dummy/roomData.json',
        );
        setRoomData(response.data.body);
      } catch (error) {
        console.error('객실 데이터 조회 실패:', error);
      }
    };
    fetchRoomData();
  }, [hotelId, roomId]);

  const closeRoomModal = () => {
    onClose();
  };

  const amenities = roomData
    ? [
        { name: '난방', available: roomData.heatingSystem },
        { name: 'TV', available: roomData.tv },
        { name: '냉장고', available: roomData.refrigerator },
        { name: '에어컨', available: roomData.airConditioner },
        { name: '세탁기', available: roomData.washer },
        { name: '발코니/테라스', available: roomData.terrace },
        { name: '커피/티 메이커', available: roomData.coffeeMachine },
        { name: '인터넷', available: roomData.internet },
        { name: '주방', available: roomData.kitchen },
        { name: '욕조', available: roomData.bathtub },
        { name: '다림질 도구', available: roomData.iron },
        { name: '전용 수영장', available: roomData.pool },
        { name: '반려동물 동반', available: roomData.pet },
        { name: '별관', available: roomData.inAnnex },
      ].filter(amenity => amenity.available)
    : [];

  return (
    <div className='roomdetail-container relative flex flex-col gap-7'>
      <div className='flex justify-end'>
        <button onClick={closeRoomModal}>
          <IoClose size={30} />
        </button>
      </div>

      <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>{roomData?.name}</h1>

      <hr style={{ border: '1px solid #eeeeee' }} />

      <div className='flex flex-col gap-2'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>객실 정보</h3>
        <ul>
          <li className='list-inside list-disc'>
            <b>숙박</b> | 체크인 {roomData?.checkIn.hour}:
            {roomData?.checkIn.minute} - 체크아웃 {roomData?.checkOut.hour}:
            {roomData?.checkOut.minute}
          </li>
          <li className='list-inside list-disc'>
            {roomData?.standardCapacity}인 기준 최대 {roomData?.maxCapacity}인
          </li>
        </ul>
      </div>

      <hr style={{ border: '1px solid #eeeeee' }} />

      <div className='flex flex-col gap-2'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>편의시설</h3>
        <div className='flex flex-wrap gap-3'>
          {amenities.map((amenity, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#e5e5e5',
                padding: '5px 10px',
                borderRadius: '5px',
              }}
            >
              {amenity.name},{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;

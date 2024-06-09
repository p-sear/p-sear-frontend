import { IoClose } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
const RoomDetail = ({ onClose }) => {
  const closeRoomModal = () => {
    onClose();
  };

  return (
    <div className='roomdetail-container relative flex flex-col gap-7'>
      <div className='flex justify-end'>
        <button onClick={closeRoomModal}>
          <IoClose size={30} />
        </button>
      </div>

      <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>객실 이름</h1>

      <hr style={{ border: '1px solid #eeeeee' }} />

      <div className='flex flex-col gap-2'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>객실 정보</h3>
        <ul>
          <li className='list-inside list-disc'>
            <b>숙박</b> | 체크인 15:00 - 체크아웃 11:00
          </li>
          <li className='list-inside list-disc'>3인 기준 최대 3인</li>
        </ul>
      </div>

      <hr style={{ border: '1px solid #eeeeee' }} />

      <div className='flex flex-col gap-2'>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>편의시설</h3>
        <div>
          <span>와이파이</span>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;

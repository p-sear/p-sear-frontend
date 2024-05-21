import roomIcon from '../../assets/icons/room_icon.png';
import './Room1.css';

const Room1 = () => {
  return (
    <div className='room1-container flex w-full flex-col items-center justify-center'>
      <img src={roomIcon} alt='' />

      <h1>당신의 객실을 등록하세요!</h1>

      <div className='room1-content flex flex-col items-center justify-center'>
        <h3>객실 등록 순서</h3>
        <ul>
          <li>🚩 객실 정보 입력</li>
          <li>🚩 객실 사진 제출</li>
        </ul>
      </div>
    </div>
  );
};

export default Room1;

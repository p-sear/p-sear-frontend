import { FaRegUserCircle, FaStar } from 'react-icons/fa';

import roomImg from '../../assets/images/room.jpg';
import './Review.css';

const Review = () => {
  return (
    <div className='review-container flex w-full flex-col justify-center'>
      <h1>리뷰</h1>

      <div className='review-box w-full'>
        <div className='flex w-full'>
          <div className='review-user flex w-full gap-2'>
            <FaRegUserCircle size='20' />
            <p>유저 이름</p>
          </div>
          <div className='review-content flex w-full flex-col gap-4'>
            <div className='flex w-full justify-between'>
              <p className='review-grade flex gap-1'>
                <FaStar fill='#ffc400' />
                <FaStar fill='#ffc400' />
                <FaStar fill='#ffc400' />
                <FaStar fill='#ffc400' />
                <FaStar fill='lightgray' />
              </p>
              <p>2024.04.16(리뷰 등록 날짜)</p>
            </div>
            <div className='review-preview flex w-full items-center justify-between'>
              <img src={roomImg} alt='' />
              <img src={roomImg} alt='' />
              <img src={roomImg} alt='' />
              <img src={roomImg} alt='' />
            </div>
            <div className='review-comment flex flex-col gap-1'>
              <h3>[오션뷰 스페셜 오퍼] [룸온리] 프리미엄 킹 룸 오션뷰</h3>
              <p>리뷰 내용</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

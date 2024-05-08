import React, { useState } from 'react';

import { Button, Typography } from '@material-tailwind/react';
import { Badge } from '@material-tailwind/react';

import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import KaKaoMap from '../HotelInquiry/KaKaoMap';
import RatingBar from '../HotelInquiry/RatingBar';
import HotelImage from './hotelImage';
import RoomCard from './roomcard';

const HotelDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const roomData = [
    {
      id: '디럭스 트윈',
      name: '디럭스 트윈',
      description: '침대 두개.',
      imageUrl:
        'https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp',
    },
    {
      id: '디럭스 트윈',
      name: '디럭스 트윈',
      description: '침대 두개.',
      imageUrl:
        'https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp',
    },
    {
      id: '디럭스 트윈',
      name: '디럭스 트윈',
      description: '침대 두개.',
      imageUrl:
        'https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp',
    },
  ];

  return (
    <div className='max-w-full '>
      <HotelImage />

      <div className='mx-40 flex flex-col items-center justify-between lg:flex-row'>
        <div>
          <Typography variant='h5' color='black' className='m-4'>
            Black.5성급.호텔
          </Typography>
          <Typography variant='h2' color='blue' textGradient className='m-4 '>
            히든 클리프 호텔&네이쳐
          </Typography>
          <div className='m-4 flex justify-between'>
            <RatingBar></RatingBar>
            <Button color='blue'>더보기</Button>
          </div>

          <Typography variant='h5' color='black' className='mb-2 ml-4'>
            서비스 및 부대시설
          </Typography>
          <Typography variant='h6' color='black' className='mb-2 ml-4'>
            🛁욕실 🚽화장실 🚿샤워실 🛏침대 ♨스파{' '}
          </Typography>
          <Typography variant='h4' color='black' className='mb-2 ml-4'>
            숙소 소개
          </Typography>
          <Typography variant='h6' color='black' className='mb-2 ml-4'>
            "전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에 여유와
            품격을 한층 높여 주는 프리미엄 라이프스타일 공간으로 변화를 거듭해
            오는 세계 최고의 럭셔리 호텔입니다"
          </Typography>
        </div>

        <div className=' flex flex-col '>
          <div className='m-2 rounded-xl'>
            <KaKaoMap />
          </div>
          <div className='z-30 m-2 w-full'>
            <DateSelector />
          </div>
          <div className='z-30 m-2'>
            <PeopleSelector fullWidth />
          </div>
          <div className='m-2 '>
            <Button color='blue' fullWidth>
              예약하기
            </Button>
          </div>
        </div>
      </div>

      <div className='mx-auto mb-4 flex w-full flex-col items-center rounded-lg lg:w-2/3'>
        {roomData.map(room => (
          <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            description={room.description}
            imageUrl={room.imageUrl}
            onMoreButtonClick={handleModalOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelDetail;

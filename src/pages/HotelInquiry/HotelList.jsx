import { useState } from 'react';

import MapModal from '../../components/Modal/MapModal';
import HotelCard from './HotelCard';
import KaKaoMap from './KaKaoMap';
import ListFilter from './ListFilter';

const HotelList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const hotelData = [
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔2',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔3',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔4',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
  ];

  return (
    <div className='container m-4 mx-auto flex flex-col lg:flex-row lg:space-x-8'>
      <div className='flex flex-col space-y-4 lg:w-1/4'>
        <div className='m-4 rounded-lg shadow-md'>
          <KaKaoMap />
        </div>
        <div className='m-4'>
          <ListFilter />
        </div>
      </div>
      <div className='lg:flex lg:w-3/4 lg:justify-center'>
        <div className='flex flex-col gap-4'>
          {hotelData.map(hotel => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              description={hotel.description}
              imageUrl={hotel.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelList;

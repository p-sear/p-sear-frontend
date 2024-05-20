import { useCallback, useEffect, useRef, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MapModal from '../../components/Modal/MapModal';
import HotelCard from './HotelCard';
import KaKaoMap from './KaKaoMap';
import ListFilter from './ListFilter';

const HotelList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleHotels, setVisibleHotels] = useState(4);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const observer = useRef();

  const hotelData = [
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔1',
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
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔5',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔6',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔7',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔8',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔9',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔10',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔11',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔12',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔13',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔14',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔15',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
    {
      id: '블랙.5성급.호텔',
      name: '서울신라호텔',
      description:
        '서울 장충동에 위치한 한국 최고의 특급호텔, 서울신라호텔입니다. 3호선 동대입구역 5번 출구에서 도보로 5분 거리에 있으며 명동과 동대문 방면으로 무료 셔틀버스를 운행하고 있습니다.',
      imageUrl:
        'https://i.namu.wiki/i/_VdL80a6q8YfJ3ob0cH0g6M4C4u3eafyHQV8oHFnZetT7yEjHPC8hybEh7-Xwfz6H6S4EkwBn6mkLvhb7rGscQ.webp',
    },
  ];

  const lastHotelCardRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setVisibleHotels(prevVisibleHotels => prevVisibleHotels + 4);
        }, 1000); // 1초
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container m-4 mx-auto flex flex-col lg:flex-row lg:space-x-8'>
      <div className='flex flex-col space-y-4 lg:w-1/4'>
        <div className='m-4 rounded-lg shadow-md' onClick={openModal}>
          <KaKaoMap />
        </div>
        <MapModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className='m-4'>
          <ListFilter />
        </div>
      </div>
      <div className='lg:flex lg:w-3/4 lg:justify-center'>
        <div className='flex flex-col gap-4'>
          {hotelData.slice(0, visibleHotels).map((hotel, index) => {
            if (index + 1 === visibleHotels) {
              return (
                <HotelCard
                  ref={lastHotelCardRef}
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  description={hotel.description}
                  imageUrl={hotel.imageUrl}
                />
              );
            } else {
              return (
                <HotelCard
                  key={hotel.id}
                  id={hotel.id}
                  name={hotel.name}
                  description={hotel.description}
                  imageUrl={hotel.imageUrl}
                />
              );
            }
          })}
        </div>
      </div>
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-4 right-4 flex items-center justify-center rounded-full bg-blue-100 p-3 text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
};

export default HotelList;

/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import MapModal from '../../components/Modal/MapModal';
import Search from '../../components/Search/Search';
import HotelCard from './HotelCard';
import KaKaoMap from './KaKaoMap';
import ListFilter from './ListFilter';

const HotelList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleHotels, setVisibleHotels] = useState(4);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const observer = useRef();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const page = searchParams.get('page');
  const size = 10;
  const [data, setData] = useState([]);

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

  const fetchData = useCallback(async () => {
    const apiUrl = `http://localhost:5173/dummy/hotelList.json?keyword=${keyword}&page=${page}&size=${size}`;
    console.log('fetchData');
    await axios
      .get(apiUrl)
      .then(response => {
        console.log(response.data.body);
        setData(response.data.body, ...data);
      })
      .catch(() => {});
  }, [keyword, page, size]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className='  shadow-md'>
        <Search></Search>
      </div>
      <div className='container m-4 mx-auto flex flex-col lg:flex-row lg:space-x-8'>
        <div className='flex flex-col space-y-4 lg:w-1/4'>
          <div className='m-4 rounded-lg shadow-md' onClick={openModal}>
            <KaKaoMap />
          </div>
          <MapModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <div className='m-4'>
            <ListFilter />
          </div>
        </div>
        <div className='lg:flex lg:w-3/4 lg:justify-center'>
          <div className='flex flex-col gap-4'>
            <Typography variant='h3' className='-mb-4 mt-4'>
              &apos;지역&apos; 숙소 ---개
            </Typography>
            {data.slice(0, visibleHotels).map((hotel, index) => {
              if (index + 1 === visibleHotels) {
                return (
                  <HotelCard
                    ref={lastHotelCardRef}
                    key={index}
                    id={hotel.id}
                    name={hotel.name}
                    description={hotel.description}
                    imageUrl={hotel.imageUrl}
                  />
                );
              } else {
                return (
                  <HotelCard
                    key={index}
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
    </div>
  );
};

export default HotelList;

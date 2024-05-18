import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import MapModal from '../../components/Modal/MapModal';
import CheckBox2 from './CheckBox2';
import HotelCard from './HotelCard';
import KaKaoMap from './KaKaoMap';

const MyApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const page = searchParams.get('page');
  const size = 10;
  console.log(page);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:5173/dummy/hotelList.json?keyword=${keyword}&page=${page}&size=${size}`;
    axios
      .get(apiUrl)
      .then(response => {
        console.log(response.data.body);
        setData(response.data.body, ...data);
      })
      .catch(() => {});
  }, [data, keyword, page, size]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='flex justify-center'>
      <div className='flex-1 bg-blue-50 p-8'>
        <h1 className='text-center'></h1>

        <div className='max-w-auto mb-8 flex justify-center space-x-8  '>
          <CheckBox2 id='a' />
          <div className='ml-4 rounded-xl' onClick={openModal}>
            <KaKaoMap />
          </div>
          <MapModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <div className='mb-8 flex flex-col items-center'>
          {data.map((hotel, index) => (
            <HotelCard
              key={index}
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

export default MyApp;

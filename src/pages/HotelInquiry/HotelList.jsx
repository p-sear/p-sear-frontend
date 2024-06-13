/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from 'react';

import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useLocation, useSearchParams } from 'react-router-dom';

import HotelCard from './HotelCard';
import KaKaoMap from './KaKaoMap';
import ListFilter from './ListFilter';

const HotelList = () => {
  const observer = useRef();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [nextScore, setNextScore] = useState(0);
  const [nextId, setNextId] = useState(0);

  const dateRange = location.state?.dateRange;
  const peopleCount = location.state?.peopleCount;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [hotelData, setHotelData] = useState([]);

  const handleHotelDataLoaded = data => {
    setHotelData(data);
  };

  const lastElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && last == false) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, nextId, nextScore],
  );

  const loadMore = () => {
    setLoading(true);
    let url = `${import.meta.env.VITE_PROD_API_SERVER}/search/hotels`;

    if (nextId && nextScore && keyword) {
      url += `?idAfter=${nextId}&scoreAfter=${nextScore}&keyword=${keyword}`;
    } else if (nextId && nextScore) {
      url += `?idAfter=${nextId}&scoreAfter=${nextScore}`;
    } else if (keyword) {
      url += `?keyword=${keyword}`;
    }
    axios
      .get(url)
      .then(response => {
        console.log(response.data.body.content);
        setData(prevData => [...prevData, ...response.data.body.content]);
        setNextId(response.data.body.nextId);
        setNextScore(response.data.body.nextScore);
        setLast(response.data.body.last);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMore(); // Initial load
  }, []);

  return (
    <div>
      <div className='container m-4 mx-auto flex flex-col lg:flex-row lg:space-x-8'>
        <div className='flex flex-col space-y-4 lg:w-1/4'>
          <div className='m-4 rounded-lg shadow-md'>
            <KaKaoMap
              keyword={keyword}
              onHotelDataLoaded={handleHotelDataLoaded}
            />
          </div>
          <div className='m-4'>
            <ListFilter dateRange={dateRange} peopleCount={peopleCount} />
          </div>
        </div>
        <div className='lg:flex lg:w-3/4 lg:justify-center'>
          <div className='flex flex-col gap-4'>
            <Typography variant='h3' className='-mb-4 mt-4'>
              &apos;{keyword}&apos; 숙소 {data.length}개
            </Typography>
            {data.map((hotel, index) => {
              if (index + 1) {
                return (
                  <HotelCard
                    ref={lastElementRef}
                    key={index}
                    id={hotel.id}
                    name={hotel.name}
                    description={hotel.description}
                    imageUrl={hotel.mainImage}
                    price={hotel.price}
                    dateRange={dateRange}
                    peopleCount={peopleCount}
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
                    dateRange={dateRange}
                    peopleCount={peopleCount}
                    review={hotel.review}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;

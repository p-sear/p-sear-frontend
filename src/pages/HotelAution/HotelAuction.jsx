import { useEffect, useState } from 'react';

import { Button, Card, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useLocation } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import HotelImage from '../HotelDetails/hotelImage';
import RatingBar from '../HotelInquiry/RatingBar';
import Auction from './auction';
import AuctionBar from './auctionBar';
import AuctionRoom from './auctionRoom';

const HotelAuction = () => {
  const [hotelDetails, setHotelDetails] = useState([]);

  const location = useLocation();

  const dateRange = location.state?.dateRange;
  const peopleCount = location.state?.peopleCount;

  console.log(dateRange);
  console.log('test');

  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/auctionHotel.json',
        );
        setHotelDetails(response.data.body);
      } catch (error) {
        console.error('경매 호텔 설명 오류', error);
      }
    };

    fetchHotelDetails();
  }, []);

  return (
    <div>
      <Auction></Auction>
      <div className='mx-auto max-w-7xl p-4'>
        <div className='mb-8'>
          <HotelImage />
        </div>
        <div
          key={hotelDetails.id}
          className='m-4 flex flex-col items-start justify-between rounded-lg bg-gray-50 p-6 shadow-md lg:flex-row lg:items-center'
        >
          {hotelDetails.map(hotelDetail => (
            <>
              <div className='group-disabled:w-full lg:mr-4 lg:w-3/4'>
                <Card className='bg-white p-6 shadow-md'>
                  <Typography variant='h6' color='black' className='mb-2'>
                    {hotelDetail.category}
                  </Typography>
                  <Typography variant='h3' color='black' className='mb-4'>
                    {hotelDetail.name}
                  </Typography>
                  <Typography variant='h5' color='black' className='mb-4'>
                    서비스 및 부대시설
                  </Typography>
                  <div className='mb-4 flex flex-wrap'>
                    {hotelDetail.wifi && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        WIFI
                      </span>
                    )}
                    {hotelDetail.barbecue && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        바베큐
                      </span>
                    )}
                    {hotelDetail.sauna && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        사우나/스파
                      </span>
                    )}
                    {hotelDetail.swimmingPool && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        수영장
                      </span>
                    )}
                    {hotelDetail.restaurant && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        레스토랑
                      </span>
                    )}
                    {hotelDetail.roofTop && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        루프탑
                      </span>
                    )}
                    {hotelDetail.fitness && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        피트니스
                      </span>
                    )}
                    {hotelDetail.dryer && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        건조기
                      </span>
                    )}
                    {hotelDetail.breakfast && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        조식
                      </span>
                    )}
                    {hotelDetail.smokingArea && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        흡연구역
                      </span>
                    )}
                    {hotelDetail.allTimeDesk && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        24시간 데스크
                      </span>
                    )}
                    {hotelDetail.luggageStorage && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        짐보관
                      </span>
                    )}
                    {hotelDetail.snackBar && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        스낵바
                      </span>
                    )}
                    {hotelDetail.petFriendly && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        반려동물동반
                      </span>
                    )}
                  </div>
                  <Typography variant='h4' color='black' className='mb-2'>
                    숙소 소개
                  </Typography>
                  <Typography variant='body1' color='black'>
                    &quot;{hotelDetail.description}&quot;
                  </Typography>
                </Card>
              </div>
              <div className='flex w-full flex-col space-y-4 lg:w-1/4'>
                <div className='h-40 w-72 rounded-lg'>
                  <Map
                    center={{
                      lat: hotelDetail.latitude,
                      lng: hotelDetail.longtitude,
                    }}
                    style={{ width: '100%', height: '100%' }}
                    level={3}
                    className='rounded-lg'
                  >
                    <MapMarker
                      position={{
                        lat: hotelDetail.latitude,
                        lng: hotelDetail.longtitude,
                      }}
                    ></MapMarker>
                  </Map>
                </div>
                <DateSelector initialRange={dateRange} />
                <PeopleSelector initialCount={peopleCount} />
              </div>
            </>
          ))}
        </div>
        <div className='m-4'>
          <Card className='w-full bg-gray-50 p-4 shadow-md'>
            <div className='flex items-center justify-between'>
              <RatingBar />
              <Button color='white'>더보기</Button>
            </div>
          </Card>
        </div>

        <div className='m-4 flex items-start justify-between rounded-lg bg-gray-50 p-6 shadow-md lg:flex-row lg:items-center'>
          <AuctionRoom></AuctionRoom>
          <AuctionBar></AuctionBar>
        </div>
      </div>
    </div>
  );
};

export default HotelAuction;

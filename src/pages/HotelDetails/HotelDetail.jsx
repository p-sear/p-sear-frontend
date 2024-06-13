import { useEffect, useState } from 'react';

import { Button, Card, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import RatingBar from '../HotelInquiry/RatingBar';
import RecommendCard from './RecommendCard';
import HotelImage from './hotelImage';
import RoomCard from './roomcard';

const HotelDetail = () => {
  const [roomData, setRoomData] = useState([]);
  const { hotelId } = useParams();
  const [recommendedHotels, setRecommendedHotels] = useState([]);
  const [hotelDetails, setHotelDetails] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dateRange = location.state?.dateRange;
  const peopleCount = location.state?.peopleCount;

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_PROD_API_SERVER}/search/hotels/${hotelId}`,
        );
        console.log(response.data.body.rooms);
        setRoomData(response.data.body.rooms);
        console.log(response.data.body);
        setHotelDetails(response.data.body);
        console.log(response.data.body.images);
      } catch (error) {
        console.error('객실 리스트 오류', error);
      }
    };

    fetchRoomData();

    const fetchRecommendedHotels = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/recommendedList.json',
        );
        setRecommendedHotels(response.data.body);
      } catch (error) {
        console.error('추천 숙소 오류', error);
      }
    };

    fetchRecommendedHotels();
  }, [hotelId]);

  const handleButtonClick = (hotelName, roomData, peopleCount, dateRange) => {
    navigate('/hotel-reservation', {
      state: { hotelName, roomData, peopleCount, dateRange },
    });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!hotelDetails) {
    console.log('loading..');
    return <>Loading..</>;
  }

  return (
    <div className='mx-auto max-w-7xl p-4'>
      {hotelDetails ? (
        <>
          <div className='mb-8'>
            {hotelDetails.images && hotelDetails.images.length > 0 && (
              <HotelImage imgList={hotelDetails.images} />
            )}
          </div>
          <div className='m-4 flex flex-col items-start justify-between rounded-lg bg-gray-50 p-6 shadow-md lg:flex-row lg:items-center'>
            <div className='group-disabled:w-full lg:mr-4 lg:w-3/4'>
              <Card className='bg-white p-6 shadow-md'>
                <Typography variant='h6' color='black' className='mb-2'>
                  {hotelDetails.category}
                </Typography>
                <Typography variant='h3' color='black' className='mb-4'>
                  {hotelDetails.name}
                </Typography>
                <Typography variant='h5' color='black' className='mb-4'>
                  서비스 및 부대시설
                </Typography>
                {hotelDetails.facility && hotelDetails.facility.length > 0 ? (
                  <div className='mb-4 flex flex-wrap'>
                    {hotelDetails.facility.wifi && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        WIFI
                      </span>
                    )}
                    {hotelDetails.facility.barbecue && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        바베큐
                      </span>
                    )}
                    {hotelDetails.facility.sauna && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        사우나/스파
                      </span>
                    )}
                    {hotelDetails.facility.swimmingPool && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        수영장
                      </span>
                    )}
                    {hotelDetails.facility.restaurant && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        레스토랑
                      </span>
                    )}
                    {hotelDetails.facility.roofTop && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        루프탑
                      </span>
                    )}
                    {hotelDetails.facility.fitness && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        피트니스
                      </span>
                    )}
                    {hotelDetails.facility.dryer && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        건조기
                      </span>
                    )}
                    {hotelDetails.facility.breakfast && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        조식
                      </span>
                    )}
                    {hotelDetails.facility.smokingArea && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        흡연구역
                      </span>
                    )}
                    {hotelDetails.facility.allTimeDesk && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        24시간 데스크
                      </span>
                    )}
                    {hotelDetails.facility.luggageStorage && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        짐보관
                      </span>
                    )}
                    {hotelDetails.facility.snackBar && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        스낵바
                      </span>
                    )}
                    {hotelDetails.facility.petFriendly && (
                      <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                        반려동물동반
                      </span>
                    )}
                  </div>
                ) : (
                  <div>loading...</div>
                )}

                <Typography variant='h4' color='black' className='mb-2'>
                  숙소 소개
                </Typography>
                <Typography variant='body1' color='black'>
                  &quot;{hotelDetails.description}&quot;
                </Typography>
              </Card>
            </div>
            <div className='flex w-full flex-col space-y-4 lg:w-1/4'>
              <div className='h-40 w-72 rounded-lg'>
                <Map
                  center={{
                    lat: hotelDetails.latitude,
                    lng: hotelDetails.longitude,
                  }}
                  style={{ width: '100%', height: '100%' }}
                  level={3}
                  className='rounded-lg'
                >
                  <MapMarker
                    position={{
                      lat: hotelDetails.latitude,
                      lng: hotelDetails.longtitude,
                    }}
                  ></MapMarker>
                </Map>
              </div>
              <DateSelector initialRange={dateRange} />
              <PeopleSelector initialCount={peopleCount} />

              <Button
                color='blue'
                fullWidth
                onClick={() =>
                  handleButtonClick(
                    hotelDetails.name,
                    roomData,
                    peopleCount,
                    dateRange,
                  )
                }
              >
                예약하기
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div>Loading.....</div>
      )}

      <div className='m-4'>
        <Card className='w-full bg-gray-50 p-4 shadow-md'>
          <div className='flex items-center justify-between'>
            <RatingBar review={4} />
            <Button color='white'>더보기</Button>
          </div>
        </Card>
      </div>
      <div className='mx-auto mb-8 w-full lg:w-2/3'>
        {roomData.map((room, index) => (
          <RoomCard
            key={index}
            roomId={room.id}
            name={room.name}
            description={room.description}
            imageUrl={room.mainImageUrl}
            checkIn={room.checkIn}
            checkOut={room.checkOut}
            price={room.price}
            roomData={roomData}
            hotelName={hotelDetails.name}
          />
        ))}
      </div>
      <div className=''>
        <Typography variant='h4' color='black' className='mb-4'>
          추천 숙소
        </Typography>
        {
          <Slider {...sliderSettings}>
            {recommendedHotels.map(hotel => (
              <div key={hotel.id} className='p-3'>
                <div className=''>
                  <RecommendCard name={hotel.name} imageUrl={hotel.imageUrl} />
                </div>
              </div>
            ))}
          </Slider>
        }
      </div>
    </div>
  );
};

export default HotelDetail;

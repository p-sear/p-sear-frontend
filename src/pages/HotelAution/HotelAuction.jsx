import { Button, Card, Typography } from '@material-tailwind/react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import { router } from '../../router';
import HotelImage from '../HotelDetails/hotelImage';
import RatingBar from '../HotelInquiry/RatingBar';
import Auction from './auction';
import AuctionBar from './auctionBar';

const HotelAuction = () => {
  const handleButtonClick = () => {
    router.navigate('/hotel-reservation');
  };

  return (
    <div>
      <Auction></Auction>
      <div className='mx-auto max-w-7xl p-4'>
        <div className='mb-8'>
          <HotelImage />
        </div>
        <div className='m-4 flex flex-col items-start justify-between rounded-lg bg-gray-50 p-6 shadow-md lg:flex-row lg:items-center'>
          <div className='w-full lg:mr-4 lg:w-3/4'>
            <Card className='bg-white p-6 shadow-md'>
              <Typography variant='h6' color='black' className='mb-2'>
                5성급 호텔
              </Typography>
              <Typography variant='h3' color='black' className='mb-4'>
                히든 클리프 호텔&네이쳐
              </Typography>
              <Typography variant='h5' color='black' className='mb-4'>
                서비스 및 부대시설
              </Typography>
              <div className='mb-4 flex flex-wrap'>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  스파/월풀
                </span>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  노래방
                </span>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  파티룸
                </span>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  사우나/찜질방
                </span>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  커플 PC
                </span>
                <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                  트윈베드
                </span>
              </div>
              <Typography variant='h4' color='black' className='mb-2'>
                숙소 소개
              </Typography>
              <Typography variant='body1' color='black'>
                &quot;전통이라는 지붕 위에 모더니즘적 디자인 요소를 가미, 삶에
                여유와 품격을 한층 높여 주는 프리미엄 라이프스타일 공간으로
                변화를 거듭해 오는 세계 최고의 럭셔리 호텔입니다&quot;
              </Typography>
            </Card>
          </div>

          <div className='flex w-full flex-col space-y-4 lg:w-1/4'>
            <div className='h-64 w-72 rounded-lg'>
              <Map
                center={{ lat: 37.55605010732486, lng: 127.00496835047365 }}
                style={{ width: '100%', height: '100%' }}
                level={3}
                className='rounded-lg'
              >
                <MapMarker
                  position={{ lat: 37.55605010732486, lng: 127.00496835047365 }}
                ></MapMarker>
              </Map>
            </div>
            <DateSelector />
            <PeopleSelector />

            <Button color='blue' fullWidth onClick={handleButtonClick}>
              예약하기
            </Button>
          </div>
        </div>
        <div className='m-4'>
          <Card className='w-full bg-gray-50 p-4 shadow-md'>
            <div className='flex items-center justify-between'>
              <RatingBar />
              <Button color='white'>더보기</Button>
            </div>
          </Card>
        </div>
        <AuctionBar></AuctionBar>
      </div>
    </div>
  );
};

export default HotelAuction;

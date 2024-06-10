/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

import RatingBar from './RatingBar';

// eslint-disable-next-line react/display-name
const HotelCard = forwardRef((props, ref) => {
  const { id, name, description, imageUrl, dateRange, peopleCount } = props;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/hotel-detail', {
      state: { id, dateRange, peopleCount },
    });
  };

  return (
    <Card ref={ref} className='m-4 w-full max-w-6xl flex-row shadow-md'>
      <CardHeader
        shadow={false}
        floated={false}
        className='m-0 w-2/5 shrink-0 rounded-r-none'
      >
        <img
          src={imageUrl}
          alt='card-image'
          className='h-72 w-full object-cover'
        />
      </CardHeader>
      <CardBody className='relative'>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          {name}
        </Typography>
        <Typography color='gray' className='mb-8 font-normal'>
          {description}
        </Typography>
        <Typography color='black' className='mb-8 font-normal '>
          &nbsp;
        </Typography>
        <div className='mt-4  flex justify-between'>
          <RatingBar review={4} />

          <Button
            variant='text'
            className='bg-gary-50 ml-48 flex items-end gap-2'
            onClick={handleButtonClick}
          >
            더보기
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});

export default HotelCard;

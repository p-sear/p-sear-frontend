import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

import RatingBar from './RatingBar';

const HotelCard = props => {
  // eslint-disable-next-line react/prop-types
  const { id, name, description, imageUrl } = props;

  return (
    <Card className='mt-8 w-full max-w-6xl flex-row'>
      <CardHeader
        shadow={false}
        floated={false}
        className='m-0 w-2/5 shrink-0 rounded-r-none'
      >
        <img
          src={imageUrl}
          alt='card-image'
          className='h-full w-full object-cover'
        />
      </CardHeader>
      <CardBody className='relative'>
        <Typography variant='h6' color='gray' className='mb-4 uppercase'>
          {id}
        </Typography>
        <Typography variant='h4' color='blue-gray' className='mb-2'>
          {name}
        </Typography>
        <Typography color='gray' className='mb-8 font-normal'>
          {description}
        </Typography>

        <RatingBar></RatingBar>

        <a href='#' className='absolute bottom-4 right-4'>
          <Button variant='text' className='flex items-center gap-2'>
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
        </a>
      </CardBody>
    </Card>
  );
};
export default HotelCard;

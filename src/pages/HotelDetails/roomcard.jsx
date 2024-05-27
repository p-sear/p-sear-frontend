import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

import DetailModal from './detailModal';

// 파일명 수정

const RoomCard = props => {
  // eslint-disable-next-line react/prop-types
  const { id, name, description, imageUrl, checkIn, checkOut, price } = props;

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
      <div className='flex w-full flex-col justify-between p-4'>
        <CardBody className='relative'>
          <Typography variant='h4' color='blue-gray' className='mb-2'>
            {name}
          </Typography>
          <Typography color='h5' className=' font-normal'>
            {description}
          </Typography>
          <Typography color='gray' className=' mt-4 font-normal'>
            체크인 : {checkIn}
          </Typography>
          <Typography color='gray' className=' font-normal'>
            체크아웃 : {checkOut}
          </Typography>
          <Typography color='gray' className=' font-normal'>
            가격 : {price}
          </Typography>
        </CardBody>
        <div className='mt-auto flex justify-end  '>
          <DetailModal />
        </div>
      </div>
    </Card>
  );
};
export default RoomCard;

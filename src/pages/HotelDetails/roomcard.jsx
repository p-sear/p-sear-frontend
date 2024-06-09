/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

import DetailModal from './detailModal';

const RoomCard = props => {
  const {
    roomId,
    name,
    description,
    imageUrl,
    checkIn,
    checkOut,
    price,
    roomData,
    hotelName,
  } = props;

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
            체크인 : {checkIn}:00
          </Typography>
          <Typography color='gray' className=' font-normal'>
            체크아웃 : {checkOut}:00
          </Typography>
          <Typography color='gray' className=' font-normal'>
            가격 : {price}
          </Typography>
        </CardBody>
        <div className='mt-auto flex justify-end  '>
          <DetailModal
            roomId={roomId}
            name={name}
            roomData={roomData.filter(room => room.roomId === roomId)}
            hotelName={hotelName}
          />
        </div>
      </div>
    </Card>
  );
};
export default RoomCard;

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
      <div className='flex w-full flex-col justify-between p-4'>
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
        </CardBody>
        <div className='mt-auto flex justify-end  '>
          <DetailModal />
        </div>
      </div>
    </Card>
  );
};
export default RoomCard;

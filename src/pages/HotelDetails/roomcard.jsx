import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

import DetailModal from './detailModal';

// 파일명 수정

const RoomCard = props => {
  const { id, name, description, imageUrl, onMoreButtonClick } = props;

  const handleDetailButtonClick = event => {
    event.preventDefault();
  };

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

        <div className='mt-5 flex justify-end'>
          <DetailModal></DetailModal>
        </div>
      </CardBody>
    </Card>
  );
};
export default RoomCard;

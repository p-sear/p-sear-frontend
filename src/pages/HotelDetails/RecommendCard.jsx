import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

// eslint-disable-next-line react/prop-types
const RecommendCard = ({ name, description, imageUrl }) => {
  return (
    <div className='mx-auto w-3/4 shadow-md'>
      <Card className='overflow-hidden shadow-md'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none'
        >
          <img src={imageUrl} alt={name} />
        </CardHeader>
        <CardBody>
          <Typography variant='' color='blue-gray'>
            {name}
          </Typography>
          <Typography variant='' color='gray' className=' font-normal'>
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default RecommendCard;

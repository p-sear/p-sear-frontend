import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

// eslint-disable-next-line react/prop-types
const RecommendCard = ({ name, description, imageUrl }) => {
  return (
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
        <Typography variant='h4' color='blue-gray'>
          {name}
        </Typography>
        <Typography variant='lead' color='gray' className=' font-normal'>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className='flex items-center justify-between'>
        <Button size='sm' className='text-xs'>
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecommendCard;

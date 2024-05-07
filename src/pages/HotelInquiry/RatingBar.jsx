import React from 'react';

import { Rating, Typography } from '@material-tailwind/react';

const RatingBar = () => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className='flex items-center gap-2 font-bold'>
      <Typography variant='h4' color='black'>
        리뷰
      </Typography>
      {rated}.0
      <div ratedColor='amber'>
        <Rating
          value={4}
          onChange={value => setRated(value)}
          ratedColor='amber'
        />
      </div>
    </div>
  );
};

export default RatingBar;

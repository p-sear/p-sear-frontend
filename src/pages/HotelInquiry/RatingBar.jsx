import React from 'react';

import { Rating, Typography } from '@material-tailwind/react';

const RatingBar = () => {
  const [rated, setRated] = React.useState(4);

  return (
    <div className='flex items-center gap-2 font-bold'>
      <Typography variant='h6' color='black'>
        리뷰
      </Typography>
      {rated}.0
      <div className='mt-rating-bar '>
        <Rating
          value={rated}
          onChange={value => setRated(value)}
          ratedColor='amber'
          className='pointer-events-none'
        />
      </div>
    </div>
  );
};

export default RatingBar;

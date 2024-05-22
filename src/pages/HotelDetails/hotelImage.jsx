import React from 'react';

import { Carousel } from '@material-tailwind/react';

const HotelImage = () => {
  const data = [
    {
      imgelink:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/09/the-shilla-seoul-exterior.jpg?w=1000&h=-1&s=1',
    },
    {
      imgelink:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/cf/90/caption.jpg?w=1000&h=-1&s=1',
    },
    {
      imgelink:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/cf/90/caption.jpg?w=1000&h=-1&s=1',
    },
    {
      imgelink:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/4f/grand-corner-deluxe.jpg?w=1000&h=-1&s=1',
    },
    {
      imgelink:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/4e/grand-corner-deluxe.jpg?w=1000&h=-1&s=1',
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = React.useState(
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/09/the-shilla-seoul-exterior.jpg?w=1000&h=-1&s=1',
  );

  return (
    <div>
      <Carousel
        loop={true}
        autoplay={true}
        autoplayDelay={5000}
        className='rounded-xl'
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className='absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2'>
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {data.map(({ imgelink }, index) => (
          <div key={index} className='flex items-center justify-center'>
            <img
              src={imgelink}
              className='h-auto w-full max-w-3xl rounded-xl object-cover object-center shadow-md'
              alt={`gallery-image-${index}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HotelImage;

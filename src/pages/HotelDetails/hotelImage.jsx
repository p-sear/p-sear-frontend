import React from 'react';

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

  const [active, setActive] = React.useState(
    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/09/the-shilla-seoul-exterior.jpg?w=1000&h=-1&s=1',
  );

  return (
    <div className='grid justify-center gap-4'>
      <div>
        <img
          className='h-auto w-full max-w-4xl rounded-xl object-cover object-center shadow-md md:h-[480px]'
          src={active}
          alt=''
        />
      </div>
      <div className='grid grid-cols-5 gap-4'>
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className='shadow-mdobject-cover h-20 w-full max-w-full cursor-pointer rounded-xl object-center'
              alt='gallery-image'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelImage;

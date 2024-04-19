import React from 'react';

const HotelImage = () => {
  const data = [
    {
      imgelink:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/09/the-shilla-seoul-exterior.jpg?w=1000&h=-1&s=1",
    },
    {
      imgelink:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/cf/90/caption.jpg?w=1000&h=-1&s=1",
    },
    {
      imgelink:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/59/cf/90/caption.jpg?w=1000&h=-1&s=1",
    },
    {
      imgelink:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/4f/grand-corner-deluxe.jpg?w=1000&h=-1&s=1",
    },
    {
      imgelink:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/11/15/4e/grand-corner-deluxe.jpg?w=1000&h=-1&s=1",
    },
  ];

  const [active, setActive] = React.useState(
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/6d/eb/9e/caption.jpg?w=1000&h=-1&s=1",
  );

  return (
    <div className="grid gap-4 justify-center">
      <div>
        <img
          className="h-auto  max-w-4xl rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-m cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelImage;

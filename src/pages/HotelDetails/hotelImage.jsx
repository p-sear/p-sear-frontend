import { Carousel } from '@material-tailwind/react';
import PropTypes from 'prop-types';

const HotelImage = ({ imgList }) => {
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
        {imgList.map((imgelink, index) => (
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

HotelImage.propTypes = {
  imgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

HotelImage.propTypes = {
  imgList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HotelImage;

/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { Carousel } from '@material-tailwind/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// eslint-disable-next-line no-unused-vars
const DetailModal = ({ roomId, name, roomData, hotelName }) => {
  const [open, setOpen] = useState(false);
  const [roomImages, setRoomImages] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState([]);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchRoomImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5173/dummy/roomImage.json`,
        );
        const images = response.data.body.find(item => item.roomId === roomId);
        if (images) {
          setRoomImages(images.imagelink);
        } else {
          setRoomImages([]);
        }
      } catch (error) {
        console.error('객실 이미지 오류', error);
      }
    };

    const fetchRoomAmenity = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5173/dummy/roomAmenity.json`,
        );
        const amenities = response.data.body.content.find(
          amenity => amenity.roomId === roomId,
        );
        if (amenities) {
          setRoomAmenities(amenities);
        } else {
          setRoomAmenities({});
        }
      } catch (error) {
        console.error('객실 시설 오류', error);
      }
    };

    if (open && roomId) {
      fetchRoomImage();
      fetchRoomAmenity();
    }
  }, [open, roomId]);

  console.log(roomData);

  const handleReservation = () => {
    navigate('/hotel-reservation1', { state: { hotelName, roomData } });
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='text'
        className='flex items-center gap-2'
      >
        상세설명 및 예약
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={5}
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
          />
        </svg>
      </Button>
      <Dialog open={open} handler={handleOpen} dismissible={false}>
        <DialogHeader className='ml-4 mt-4'>{name}</DialogHeader>
        <DialogBody>
          {roomImages.length > 0 && (
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
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'}`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              {roomImages.map((imagelink, index) => (
                <div key={index} className='flex items-center justify-center'>
                  <img
                    src={imagelink}
                    className='h-auto w-full max-w-3xl rounded-xl object-cover object-center shadow-md'
                    alt={`gallery-image-${index}`}
                  />
                </div>
              ))}
            </Carousel>
          )}
          <div className='mt-4 flex flex-wrap'>
            {roomAmenities.heatingSystem && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>난방</span>
            )}
            {roomAmenities.tv && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>TV</span>
            )}
            {roomAmenities.refrigerator && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>냉장고</span>
            )}
            {roomAmenities.airConditioner && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>에어컨</span>
            )}
            {roomAmenities.washer && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                스타일러
              </span>
            )}
            {roomAmenities.terrace && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>테라스</span>
            )}
            {roomAmenities.coffeeMachine && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                커피머신
              </span>
            )}
            {roomAmenities.internet && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>인터넷</span>
            )}
            {roomAmenities.kitchen && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>주방</span>
            )}
            {roomAmenities.bathub && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>욕조</span>
            )}
            {roomAmenities.iron && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>다리미</span>
            )}
            {roomAmenities.pool && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>개인풀</span>
            )}
            {roomAmenities.inAnnex && (
              <span className='m-1 rounded bg-gray-200 px-3 py-1'>
                별관위치
              </span>
            )}
          </div>
        </DialogBody>
        <DialogFooter className='flex justify-end gap-2'>
          <Button
            color='blue'
            onClick={handleReservation}
            className='mr-1 text-white'
          >
            예약하기
          </Button>
          <Button color='white' onClick={handleClose}>
            나가기
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DetailModal;

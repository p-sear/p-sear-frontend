import React, { useEffect, useState } from 'react';

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const DetailModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const [roomImage, setRoomImage] = useState([]);

  useEffect(() => {
    const fetchRoomImage = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/roomImage.json',
        );
        setRoomImage(response.data.body);
      } catch (error) {
        console.error('객실 이미지 오류', error);
      }
    };

    fetchRoomImage();
  }, []);

  const CustomPrevArrow = props => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props;
    return (
      <button
        className='slick-arrow  absolute right-full top-1/2 -translate-y-1/2 transform p-2 text-white'
        onClick={onClick}
      >
        <i className='fas fa-chevron-left'></i>
      </button>
    );
  };

  const CustomNextArrow = props => {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props;
    return (
      <button
        className='slick-arrow  absolute left-full top-1/2 -translate-y-1/2 transform p-2 text-white'
        onClick={onClick}
      >
        <i className='fas fa-chevron-right'></i>
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
        <DialogHeader className='ml-4 mt-4'>스탠다드</DialogHeader>
        <DialogBody>
          <Slider {...settings} className='mx-8 mb-8'>
            {roomImage.map(({ imgelink }, index) => (
              <div key={index}>
                <img src={imgelink} />
              </div>
            ))}
          </Slider>
          객실 정보 숙박 | 체크인 15:00 - 체크아웃 11:00 2인 기준 최대 3인
          (유료) 인원 추가시 비용이 발생되며, 현장에서 결제 바랍니다. 싱글베드
          1개, 더블베드 1개 객실+욕실 / 10평
        </DialogBody>
        <DialogFooter className='flex justify-end gap-2'>
          <Button
            color='blue'
            onClick={handleClose}
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

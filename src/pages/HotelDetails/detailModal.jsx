import React from 'react';

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';

const DetailModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant='text'
        className='flex items-center gap-2'
      >
        상세설명
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
          />
        </svg>
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>스탠다드</DialogHeader>
        <img src='https://res.klook.com/image/upload/c_fill,w_627,h_470/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/awessankdbaeuib4xjks.webp'></img>
        <DialogBody>객실 정보 입력</DialogBody>
        <DialogFooter>
          <Button color='blue' onClick={handleOpen} className='mr-1'>
            <span>예약하기</span>
          </Button>
          <Button color='white' onClick={handleOpen}>
            <span>나가기</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DetailModal;

import React from 'react';

import { Input, Typography } from '@material-tailwind/react';
import { Button, Checkbox } from '@material-tailwind/react';

const HotelReservation2 = () => {
  return (
    <div className='flex  flex-col items-center justify-center'>
      <div>
        <Typography
          variant='h1'
          color='blue'
          textGradient
          className='m-4 text-center'
        >
          예약 정보 입력
        </Typography>
      </div>
      <div className='flex w-72 flex-col gap-6'>
        <Input
          variant='standard'
          color='blue'
          label='성명'
          placeholder='성명'
          className=' mx-auto'
        />

        <Input
          variant='standard'
          color='blue'
          label='연락처'
          placeholder='연락처'
          className=' mx-auto'
        />
      </div>
      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        방문방법
      </Typography>
      <div className='flex w-max gap-4'>
        <Checkbox color='blue' label='도보 방문' />
        <Checkbox color='blue' label='차량 방문' />
      </div>

      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        약관 동의
      </Typography>
      <div className='flex w-max flex-col gap-1'>
        <Checkbox
          color='blue'
          label='숙소 이용규칙 및 취소/환불규정 동의 (필수)'
        />
        <Checkbox color='blue' label='개인정보 수집 및 이용 동의 (필수)' />
        <Checkbox color='blue' label='개인정보 제 3자 제공 동의 (필수)' />
      </div>

      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        결제 수단
      </Typography>
      <Button color='yellow' className='m-4'>
        카카오 페이
      </Button>
    </div>
  );
};

export default HotelReservation2;

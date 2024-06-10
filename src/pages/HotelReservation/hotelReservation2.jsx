import { useEffect, useState } from 'react';

import { Input, Typography } from '@material-tailwind/react';
import { Button, Radio } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';

import kakaopay from '../../assets/icons/kakaopay.png';

const HotelReservation2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotelName = location.state?.hotelName;
  const selectedRoom = location.state?.selectedRoom;

  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [visitMethod, setVisitMethod] = useState('');

  console.log(hotelName);
  console.log(selectedRoom);
  console.log(name);
  console.log(phoneNum);

  const handlePhoneNumChange = e => {
    const input = e.target.value;
    const isNumber = /^[0-9]*$/;
    if (isNumber.test(input) || input === '') {
      setPhoneNum(input);
    }
  };

  const handleVisitMethodChange = method => {
    setVisitMethod(method);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('로그인 후 이용해주세요.');
      navigate('/');
    }
  });
  return (
    <div className='flex flex-col items-center justify-center'>
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
          className='mx-auto'
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          variant='standard'
          color='blue'
          label='연락처'
          placeholder='연락처'
          className='mx-auto'
          value={phoneNum}
          onChange={handlePhoneNumChange}
        />
      </div>
      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        방문방법
      </Typography>
      <div className='flex w-max gap-4'>
        <Radio
          color='blue'
          label='도보 방문'
          checked={visitMethod === '도보 방문'}
          onChange={() => handleVisitMethodChange('도보 방문')}
        />
        <Radio
          color='blue'
          label='차량 방문'
          checked={visitMethod === '차량 방문'}
          onChange={() => handleVisitMethodChange('차량 방문')}
        />
      </div>

      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        약관 동의
      </Typography>
      <div className='flex w-max flex-col gap-1'>
        <Radio
          color='blue'
          label='숙소 이용규칙 및 취소/환불규정 동의 (필수)'
        />
        <Radio color='blue' label='개인정보 수집 및 이용 동의 (필수)' />
        <Radio color='blue' label='개인정보 제 3자 제공 동의 (필수)' />
      </div>

      <Typography variant='h6' color='blue' className='mx-auto mt-4'>
        결제 수단
      </Typography>
      <Button
        color='yellow'
        className='m-4'
        style={{ width: '120px', height: '40px' }}
      >
        <img className='h-full w-full' src={kakaopay} alt='KakaoPay' />
      </Button>
    </div>
  );
};

export default HotelReservation2;

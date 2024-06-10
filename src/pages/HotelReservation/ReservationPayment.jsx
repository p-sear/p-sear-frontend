import { useState } from 'react';

import { Input, Typography } from '@material-tailwind/react';
import { Button, Radio } from '@material-tailwind/react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import kakaopay from '../../assets/icons/kakaopay.png';
import { getHotelServiceRequest } from '../../axios/hotelServiceApi';
import { postPaymentCheck, postReservation } from '../../axios/reservationApi';
import AlertModal from '../../components/Modal/AlertModal';
import MessageModal from '../../components/Modal/MessageModal';
import { sleep } from '../../util/util';

const ReservationPayment = () => {
  const location = useLocation();
  const hotelName = location.state?.hotelName || '가산 RAPA 무인텔';
  const selectedRoom = location.state?.selectedRoom || {
    roomId: 4,
    roomName: '특실',
    visitorCount: 1,
    adultCount: 1,
    childCount: 0,
    startAt: '2024-06-12',
    endAt: '2024-06-13',
  };
  const BEFORE_CHECKIN = 'BEFORE_CHECKIN';

  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [visitMethod, setVisitMethod] = useState('');
  const [messageModalOpen, setMessageModalOpen] = useState(false);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const navigate = useNavigate();

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

  const requestPay = merchantUid => {
    const IMP = window.IMP;
    IMP.init('imp24543664');
    console.log(merchantUid);
    postReservation(selectedRoom)
      .then(resp => {
        console.log(resp);
        const path = resp.headers.location;
        return getHotelServiceRequest(path);
      })
      .then(resp => {
        console.log(resp.data);
        return resp.data.body;
      })
      .then(reservation => {
        IMP.request_pay(
          {
            pg: 'kakaopay',
            merchant_uid: reservation.merchantUid,
            name: `${hotelName} - ${selectedRoom.roomName}`,
            amount: 500,
          },
          async function (resp) {
            if (resp.success) {
              console.log(resp);
              for (let i = 0; i < 5; i++) {
                const paymentCheckResp = await postPaymentCheck(
                  reservation.id,
                  resp.imp_uid,
                );
                if (paymentCheckResp.data.body === BEFORE_CHECKIN) {
                  setMessageModalOpen(true);
                  console.log('messageModal: ' + messageModalOpen);
                  return;
                }
                console.log('data.body: ' + paymentCheckResp.data.body);
                await sleep(500);
              }
              if (!messageModalOpen) {
                setAlertModalOpen(true);
                console.log('alertModal: ' + messageModalOpen);
              }
            } else {
              console.log(resp);
            }
          },
        );
      });
  };

  const onMessageModalClose = () => {
    setMessageModalOpen(false);
    navigate('/');
  };

  const onAlertModalClose = () => {
    setAlertModalOpen(false);
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <MessageModal
        open={messageModalOpen}
        onClose={onMessageModalClose}
        title='예약완료'
      />
      <AlertModal
        open={alertModalOpen}
        onClose={onAlertModalClose}
        title='예약 중 오류가 발생했습니다'
      />
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
        onClick={requestPay}
      >
        <img className='h-full w-full' src={kakaopay} alt='KakaoPay' />
      </Button>
    </div>
  );
};

export default ReservationPayment;

import { useEffect, useState } from 'react';

import axios from 'axios';
import { differenceInDays, parseISO } from 'date-fns';
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

import printIcon from '../../assets/icons/print.png';
import pserLoading from '../../assets/images/loading.png';
import './ReservationDetail.css';

const ReservationDetail = () => {
  const [reservationData, setReservationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5173/dummy/myReservation.json`,
        );
        const reservationData = response.data.body.content.find(
          r => r.id === parseInt(id),
        );
        setReservationData(reservationData);
        setLoading(false);
      } catch (error) {
        console.error('숙소 예약 조회 API 호출 실패:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>정보 불러오는 중...</p>;
  }

  if (!reservationData) {
    return <p>예약 내역을 조회할 수 없습니다.</p>;
  }

  const services = [
    { name: '주차', available: reservationData.parkingLot },
    { name: '와이파이', available: reservationData.wifi },
    { name: 'BBQ', available: reservationData.barbecue },
    { name: '사우나', available: reservationData.sauna },
    { name: '수영장', available: reservationData.swimmingPool },
    { name: '레스토랑', available: reservationData.restaurant },
    { name: '루프탑', available: reservationData.roofTop },
    { name: '피트니스', available: reservationData.fitness },
    { name: '건조기', available: reservationData.dryer },
    { name: '조식', available: reservationData.breakfast },
    { name: '흡연 구역', available: reservationData.smokingArea },
    { name: '24시간 데스크', available: reservationData.allTimeDesk },
    { name: '짐 보관', available: reservationData.luggageStorage },
    { name: '매점', available: reservationData.snackBar },
    { name: '반려견 동반', available: reservationData.petFriendly },
  ].filter(service => service.available);

  const checkInDate = parseISO(reservationData.checkIn);
  const checkOutDate = parseISO(reservationData.checkOut);
  const numberOfNights = differenceInDays(checkOutDate, checkInDate);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className='resDetail flex items-center justify-center'>
      <div className='resDetail-container flex flex-col justify-center gap-5'>
        <p className='flex items-center gap-3'>
          <a href='/profile/reservations'>
            <FaArrowLeftLong />
          </a>
          <span>예약 내역</span>
        </p>

        <div className='resDetail-list flex w-full flex-col justify-center gap-12'>
          <div className='hotel-card w-full'>
            <img
              src={reservationData.mainImage || pserLoading}
              className='w-full'
            />

            <div>
              <div className='p-5'>
                <p>{reservationData.city}</p>
                <h3 className='text-blue-600'>{reservationData.name}</h3>
                <p className='res-grade relative bg-white'>
                  <FaStar className='star-icon absolute' />
                  {reservationData.rating}
                </p>
              </div>
              <hr style={{ border: '1px solid #E7E7E7' }} />
              <div className='flex items-center justify-between p-5'>
                <div>
                  <p className='text-xs'>체크인</p>
                  <b>{reservationData.checkIn}</b>
                  <p>15:00</p>
                </div>
                <p className='out-in'>{numberOfNights}박</p>
                <div>
                  <p className='text-xs'>체크아웃</p>
                  <b>{reservationData.checkOut}</b>
                  <p>11:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className='room-card w-full'>
            <div className='flex flex-col gap-3 p-5'>
              <h3>객실 정보</h3>
              <div className='flex gap-3'>
                <img
                  src={reservationData.roomImage || pserLoading}
                  className='res-room-img'
                />
                <div className='flex flex-col gap-2'>
                  <b>{reservationData.roomType}</b>
                  <p>
                    {reservationData.area}㎡ | {reservationData.bed} 베드
                  </p>
                </div>
              </div>
            </div>

            <hr style={{ border: '1px solid #E7E7E7' }} />

            <div className='flex flex-col gap-2 p-5'>
              <p>객실 서비스</p>
              <div className='flex flex-wrap items-center gap-3'>
                {services.map(service => (
                  <span key={service.name} className='res-services'>
                    {service.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='member-card w-full'>
            <div className='flex flex-col gap-3 p-5'>
              <h3>투숙객 정보</h3>
              <div>
                <p>대표 투숙객</p>
                <b>{reservationData.userName}</b>
              </div>
            </div>

            <hr style={{ border: '1px solid #E7E7E7' }} />

            <div className='p-5'>
              <p>총 예약 인원</p>
              <b>{reservationData.members}명</b>
            </div>
          </div>

          <div className='cancel-card flex w-full flex-col gap-3 p-5'>
            <h3>취소 정책</h3>
            <p>
              예약한 호텔이나 숙소에 체크인하지 않을 경우 노쇼(No-Show)로
              간주되며, 예약 요금의 100%가 취소 요금으로 부과됩니다(호텔 정책).
            </p>
          </div>

          <div className='pay-card w-full'>
            <div className='flex flex-col gap-1 p-5'>
              <h3>결제 정보</h3>

              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <h4 className='font-bold'>총 금액</h4>
                  <h4 className='font-bold'>KRW {reservationData.price}</h4>
                </div>

                <div className='flex flex-col gap-1'>
                  <p className='text-sm'>도시세 관련 안내</p>
                  <p className='text-sm'>
                    현지 세금 규정에 따라 숙박 시설 이용 시 객실 요금에 기반해
                    도시세가 부과될 수 있습니다. 해당 세금은 체크인 시 숙소로
                    직접 지불하시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>

            <hr style={{ border: '1px solid #E7E7E7' }} />

            <div className='p-5'>
              <p>결제 방법</p>
              <p className='text-lg'>카카오 페이</p>
            </div>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className='print-btn mt-20 flex flex-col items-center justify-center gap-1 self-center'
        >
          <img src={printIcon} alt='' />
          인쇄
        </button>
      </div>
    </div>
  );
};

export default ReservationDetail;

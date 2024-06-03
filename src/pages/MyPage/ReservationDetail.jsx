import { FaArrowLeftLong, FaStar } from 'react-icons/fa6';

import pserLoading from '../../assets/images/loading.png';
import './ReservationDetail.css';

const ReservationDetail = () => {
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
            <img src={pserLoading} className='w-full' />

            <div>
              <div className='p-5'>
                <p>숙소 위치</p>
                <h3 className='text-blue-600'>숙소 이름</h3>
                <p className='res-grade relative bg-white'>
                  <FaStar className='star-icon absolute' />
                  평점
                </p>
              </div>
              <hr style={{ border: '1px solid #E7E7E7' }} />
              <div className='flex items-center justify-between p-5'>
                <div>
                  <p className='text-xs'>체크인</p>
                  <b>2024년 6월 13일</b>
                  <p>15:00</p>
                </div>
                <p className='out-in'>4박</p>
                <div>
                  <p className='text-xs'>체크아웃</p>
                  <b>2024년 6월 17일</b>
                  <p>11:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className='room-card w-full'>
            <div className='flex flex-col gap-3 p-5'>
              <h3>객실 정보</h3>
              <div className='flex gap-3'>
                <img src={pserLoading} className='res-room-img' />
                <div className='flex flex-col gap-2'>
                  <b>객실 이름</b>
                  <p>객실 너비 | 금연 | 침대 사이즈</p>
                </div>
              </div>
            </div>

            <hr style={{ border: '1px solid #E7E7E7' }} />

            <div className='flex flex-col gap-2 p-5'>
              <p>객실 서비스</p>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='res-services'>Wifi</span>
                <span className='res-services'>금연</span>
              </div>
            </div>
          </div>

          <div className='member-card w-full'>
            <div className='flex flex-col gap-3 p-5'>
              <h3>투숙객 정보</h3>
              <div>
                <p>대표 투숙객</p>
                <b>예약자 이름</b>
              </div>
            </div>

            <hr style={{ border: '1px solid #E7E7E7' }} />

            <div className='p-5'>
              <p>총 예약 인원</p>
              <b>성인 2명</b>
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
            <div className='flex flex-col gap-3 p-5'>
              <h3>결제 정보</h3>

              <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                  <p>객실 1개 x 4박</p>
                  <p>KRW 229,441.83</p>
                </div>
                <div className='flex justify-between'>
                  <p>세금 및 봉사료</p>
                  <p>KRW 22,936.17</p>
                </div>
              </div>

              <hr />

              <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                  <h4 className='text-lg font-bold'>총 금액</h4>
                  <h4 className='text-lg font-bold'>KRW 252,378.00</h4>
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
      </div>
    </div>
  );
};

export default ReservationDetail;

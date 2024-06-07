import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaStar } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { TbPhotoPlus } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

// import hotelImg from '../../assets/images/hotel.png';
import pserLoadig from '../../assets/images/loading.png';
import DateSelector from '../../components/Search/DateSelector';
import PeopleSelector from '../../components/Search/PeopleSelector';
import ScrollToTop from '../../helpers/ScrollToTop';
import KaKaoMap from '../HotelInquiry/KaKaoMap';
import './TimeSpecialDetail.css';

const TimeSpecialDetail = () => {
  const { id } = useParams();

  const [hotelData, setHotelData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/timeSpecialList.json',
        );
        setHotelData(
          response.data.body.content.find(r => r.id === parseInt(id)),
        );
      } catch (error) {
        console.error('타임 특가 조회 api 호출 실패:', error);
      }
    };
    fetchHotelData();
  }, [id]);

  const handleShowModal = index => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? hotelData.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === hotelData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className='specialDetail flex items-center justify-center'>
      <ScrollToTop />
      <div className='specialDetail-container flex flex-col gap-10'>
        <div className='specialDetail-images relative grid w-full'>
          {hotelData && (
            <>
              <img src={hotelData.mainImage} alt='' />
              {hotelData.hotelImageUrls.slice(0, 4).map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`Hotel Image ${index + 1}`}
                  className='sd-img'
                  onClick={() => handleShowModal(index + 1)}
                />
              ))}
              {hotelData.hotelImageUrls.length > 4 && (
                <button
                  className='more-img-btn absolute'
                  onClick={() => handleShowModal(0)}
                >
                  <TbPhotoPlus stroke='white' />
                </button>
              )}
            </>
          )}
        </div>

        {showModal && (
          <div className='modal fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='modal-content relative rounded-lg bg-white p-6'>
              <button
                className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'
                onClick={handleCloseModal}
              >
                X
              </button>
              <img
                src={hotelData.hotelImageUrls[currentIndex]}
                alt={`Hotel Image ${currentIndex + 1}`}
                className='max-h-[80vh] object-contain'
              />
              <div className='mt-4 flex justify-between'>
                <button
                  className='rounded bg-gray-200 px-4 py-2 hover:bg-gray-300'
                  onClick={handlePrevImage}
                >
                  이전
                </button>
                <button
                  className='rounded bg-gray-200 px-4 py-2 hover:bg-gray-300'
                  onClick={handleNextImage}
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        )}

        <div className='specialDetail-content flex gap-10'>
          <div className='specialDetail-hotel flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-1'>
                <p>호텔</p>
                <h1 className='text-2xl font-bold'>호텔 이름</h1>
                <p className='res-grade relative bg-white'>
                  <FaStar className='star-icon absolute' />
                  평점
                </p>
              </div>
              <GoHeart size={30} className='bookmark-icon' />
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <b className='text-lg'>서비스 및 부대시설</b>
              <div className='special-service flex flex-wrap gap-3'>
                <span>피트니스</span>
                <span>수영장</span>
              </div>
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <b className='text-lg'>숙소 소개</b>
              <p>
                강문해변 앞에 자리 잡아 객실에서 드넓고 아름다운 바다를 감상할
                수 있습니다.
                <br />
                아름다운 대자연과 어우러지는 특별하고도 환상적인 경험을 느낄 수
                있습니다.
              </p>
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <b className='text-lg'>객실 선택</b>

              <div className='special-room-card flex gap-5'>
                <img src={pserLoadig} className='special-room-img' />

                <div className='special-room-content flex w-full flex-col justify-between'>
                  <b>디럭스 더블</b>
                  <div className='flex w-full justify-between rounded-lg bg-white p-3'>
                    <div>
                      <p className='text-sm'>입실 15:00</p>
                      <p className='text-sm'>퇴실 11:00</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                      <div className='flex flex-col'>
                        <p className='line-through' style={{ color: 'gray' }}>
                          430,000 원
                        </p>
                        <b>229,000 원</b>
                      </div>
                      <button className='special-res-btn flex-end w-full text-sm'>
                        객실 예약
                      </button>
                    </div>
                  </div>

                  <div className='rounded-lg bg-white p-3'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm'>객실 정보</p>
                      <p className='text-sm'>기준 2인 | 최대 3인(유료)</p>
                    </div>

                    <div className='flex items-center justify-between'>
                      <p className='text-sm'>추가 정보</p>
                      <p className='text-sm'>오션뷰</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <b className='text-lg'>리뷰</b>
                <a href='' style={{ color: 'gray' }} className='text-sm'>
                  더 보기 &gt;
                </a>
              </div>

              <div className='special-review flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <p className='flex items-center gap-1'>
                    <FaStar className='star-i' size={20} />
                    <span className='text-lg'>평점</span>
                  </p>
                  <p>날짜</p>
                </div>

                <p>리뷰 내용</p>
              </div>
            </div>
          </div>

          <article className='flex flex-col gap-5'>
            <div>
              <KaKaoMap />
            </div>

            <div className='specialDetail-res flex flex-col items-center justify-center gap-3'>
              <div className='w-full'>
                <DateSelector />
              </div>
              <div className='w-full'>
                <PeopleSelector />
              </div>
              <button className='w-full'>예약하기</button>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TimeSpecialDetail;

import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaStar } from 'react-icons/fa6';
import { GoHeart } from 'react-icons/go';
import { IoClose } from 'react-icons/io5';
import { TbPhotoPlus } from 'react-icons/tb';
import { useParams } from 'react-router-dom';

// import hotelImg from '../../assets/images/hotel.png';
// import pserLoadig from '../../assets/images/loading.png';
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
  const [imageUrls, setImageUrls] = useState([]);

  const [allHotelsData, setAllHotelsData] = useState([]);
  const [roomData, setRoomData] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5173/dummy/timeSpecialList.json',
        );
        const timeSpecialHotel = response.data.body.content.find(
          r => r.id === parseInt(id),
        );
        setHotelData(timeSpecialHotel);
        setImageUrls([
          timeSpecialHotel.mainImage,
          ...timeSpecialHotel.hotelImageUrls,
        ]);

        // 전체 호텔 데이터 가져오기
        const allHotelsResponse = await axios.get(
          'http://localhost:5173/dummy/hotel.json',
        );
        setAllHotelsData(allHotelsResponse.data.body);

        // 객실 API 호출
        const roomResponse = await axios.get(
          'http://localhost:5173/dummy/roomList.json',
        );
        const roomData = roomResponse.data.body.filter(
          room => room.id === timeSpecialHotel.id,
        );
        setRoomData(roomData);

        // 리뷰 데이터 가져오기
        const reviewResponse = await axios.get(
          'http://localhost:5173/dummy/reviews.json',
        );
        const reviewData = reviewResponse.data.content.filter(
          review => review.id === timeSpecialHotel.id,
        );
        setReviewData(reviewData);
      } catch (error) {
        console.error('데이터 조회 실패:', error);
      }
    };
    fetchHotelData();
  }, [id]);

  const getCategoryInKorean = category => {
    const categoryMap = {
      HOTEL: '호텔',
      PANSION: '펜션',
      POOL: '풀빌라',
    };
    return categoryMap[category] || category;
  };

  const handleShowModal = index => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1,
    );
  };

  const handleNextImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // 서비스 및 부대시설 정보 가져오기
  const services = allHotelsData.find(hotel => hotel.id === hotelData?.id)
    ? [
        {
          name: '주차',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .parkingLot,
        },
        {
          name: '와이파이',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .wifi,
        },
        {
          name: 'BBQ',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .barbecue,
        },
        {
          name: '사우나',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .sauna,
        },
        {
          name: '수영장',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .swimmingPool,
        },
        {
          name: '레스토랑',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .restaurant,
        },
        {
          name: '루프탑',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .roofTop,
        },
        {
          name: '피트니스',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .fitness,
        },
        {
          name: '건조기',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .dryer,
        },
        {
          name: '조식',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .breakfast,
        },
        {
          name: '흡연 구역',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .smokingArea,
        },
        {
          name: '24시간 데스크',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .allTimeDesk,
        },
        {
          name: '짐 보관',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .luggageStorage,
        },
        {
          name: '매점',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .snackBar,
        },
        {
          name: '반려견 동반',
          available: allHotelsData.find(hotel => hotel.id === hotelData?.id)
            .petFriendly,
        },
      ].filter(service => service.available)
    : [];

  return (
    <div className='specialDetail flex items-center  justify-center'>
      <ScrollToTop />
      <div className='specialDetail-container flex flex-col  gap-10'>
        <div className='specialDetail-images relative grid w-full'>
          {hotelData && (
            <>
              <img
                src={hotelData.mainImage}
                alt=''
                onClick={() => handleShowModal(0)}
              />
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
                  onClick={() => handleShowModal(1)}
                >
                  <TbPhotoPlus stroke='white' />
                </button>
              )}
            </>
          )}
        </div>

        {showModal && (
          <div className='modal fixed left-0 top-0 z-50 flex w-full items-center justify-center bg-gray-900 bg-opacity-50'>
            <div className='modal-content relative flex flex-col rounded-lg bg-white p-10'>
              <button
                className='absolute right-1 top-1'
                onClick={handleCloseModal}
              >
                <IoClose size={30} />
              </button>
              <img
                src={imageUrls[currentIndex]}
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
                <p>
                  {getCategoryInKorean(hotelData?.category)} | {hotelData?.city}
                </p>
                <h1 className='text-2xl font-bold'>{hotelData?.name}</h1>
                <p className='res-grade relative bg-white'>
                  <FaStar className='star-icon absolute' />
                  {hotelData?.gradeAverage}
                </p>
              </div>
              <GoHeart size={30} className='bookmark-icon' />
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <b className='text-lg'>서비스 및 부대시설</b>
              <div className='special-service flex flex-wrap gap-3'>
                {services.map((service, index) => (
                  <span key={index}>{service.name}</span>
                ))}
              </div>
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <b className='text-lg'>숙소 소개</b>
              <p>{hotelData?.description}</p>
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-3'>
              <b className='text-lg'>객실 선택</b>

              {roomData.length === 0 ? (
                <div className='p-5 text-center text-gray-500'>
                  예약 가능한 객실이 없습니다.
                </div>
              ) : (
                <div className='flex flex-col gap-6'>
                  {roomData.map(room => (
                    <div key={room.id} className='special-room-card flex gap-5'>
                      <img src={room.imageUrl} className='special-room-img' />
                      <div className='special-room-content flex w-full flex-col justify-between'>
                        <b>{room.name}</b>
                        <div className='flex w-full justify-between rounded-lg bg-white p-3'>
                          <div>
                            <p className='text-sm'>입실 {room.checkIn}</p>
                            <p className='text-sm'>퇴실 {room.checkOut}</p>
                          </div>
                          <div className='flex flex-col gap-2'>
                            <div className='flex flex-col'>
                              <p
                                className='line-through'
                                style={{ color: 'gray' }}
                              >
                                {hotelData.previousPrice} 원
                              </p>
                              <b>{hotelData.salePrice} 원</b>
                            </div>
                            <button className='special-res-btn flex-end w-full text-sm'>
                              객실 예약
                            </button>
                          </div>
                        </div>
                        <div className='rounded-lg bg-white p-3'>
                          <div className='flex items-center justify-between'>
                            <p className='text-sm'>객실 정보</p>
                            <p className='text-sm'>{room.description}</p>
                          </div>
                          <div className='flex items-center justify-between'>
                            <p className='text-sm'>추가 정보</p>
                            <p className='text-sm'>오션뷰</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <hr style={{ border: '1px solid #ededed' }} />

            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <b className='text-lg'>리뷰</b>
                <a href='/review' style={{ color: 'gray' }} className='text-sm'>
                  더 보기 &gt;
                </a>
              </div>

              <div className='special-review flex flex-col gap-6'>
                {reviewData.map(review => (
                  <div key={review.id} className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                      <p className='flex items-center gap-2'>
                        <FaStar className='star-i' size={20} />
                        <b className='text-lg'>{review.rating}</b>
                      </p>
                      <p className='text-sm'>{review.reviewDate}</p>
                    </div>
                    <p>
                      {review.reviewContent.length > 100
                        ? review.reviewContent.slice(0, 100) + '...'
                        : review.reviewContent}
                    </p>
                  </div>
                ))}
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

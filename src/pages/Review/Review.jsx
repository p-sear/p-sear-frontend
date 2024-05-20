import { useState } from 'react';

import { FaArrowAltCircleLeft, FaRegUserCircle, FaStar } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoIosArrowUp, IoIosClose } from 'react-icons/io';

import hotelImg from '../../assets/images/hotel.png';
import roomImg from '../../assets/images/room.jpg';
import './Review.css';

const Review = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const openModal = (images, index) => {
    setCurrentImages(images);
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % currentImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      prevIndex =>
        (prevIndex - 1 + currentImages.length) % currentImages.length,
    );
  };

  const reviews = [
    {
      userName: '유저1',
      rating: 4,
      reviewDate: '2024.04.16',
      roomName: '[오션뷰 스페셜 오퍼] [룸온리] 프리미엄 킹 룸 오션뷰',
      reviewContent:
        '아난티 코브로 이름이 변경되었는데 코브란 말 자체가 대형 리조트란 뜻이라 호텔 규모가 엄청큽니다.주말에는 주차요원이 있었는데 평일이라 지하에 안내요원이 없어 처음오면 잘 찾아가야 합니다.G층을 거쳐1층 컨시어지를 지나 10층이 체크인(9층은 이그제큐티브 이상객실 체크인)하는 곳으로 엘베 각 층마다 오션뷰가 펼쳐지고 곳곳이 포토존 입니다.엘베에서 먼 843호에 투숙했습니다.',
      reviewImages: [hotelImg, roomImg, hotelImg, roomImg, hotelImg, roomImg],
    },
    {
      userName: '유저2',
      rating: 5,
      reviewDate: '2024.04.13',
      roomName: '[시티뷰] 스탠다드 트윈 룸',
      reviewContent: '다음에도 방문하고 싶어요',
      reviewImages: [roomImg, hotelImg],
    },
    {
      userName: '유저3',
      rating: 5,
      reviewDate: '2024.04.12',
      roomName: '[오션뷰 스페셜 오퍼] [룸온리] 프리미엄 킹 룸 오션뷰',
      reviewContent: '정말 좋았어요.',
      reviewImages: [roomImg, hotelImg, roomImg, hotelImg],
    },
    {
      userName: '유저4',
      rating: 3,
      reviewDate: '2024.03.26',
      roomName: '[시티뷰] 스탠다드 트윈 룸',
      reviewContent: '다음에도 방문하고 싶어요',
      reviewImages: [roomImg, hotelImg, roomImg, hotelImg, roomImg, roomImg],
    },
  ];

  const [slideIndices, setSlideIndices] = useState(reviews.map(() => 0));

  const nextSlide = (index, imagesLength) => {
    setSlideIndices(slideIndices => {
      const newSlideIndices = [...slideIndices];
      newSlideIndices[index] = (newSlideIndices[index] + 1) % imagesLength;
      return newSlideIndices;
    });
  };

  const prevSlide = (index, imagesLength) => {
    setSlideIndices(slideIndices => {
      const newSlideIndices = [...slideIndices];
      newSlideIndices[index] =
        (newSlideIndices[index] - 1 + imagesLength) % imagesLength;
      return newSlideIndices;
    });
  };

  const [expandedReviews, setExpandedReviews] = useState({});
  const toggleExpand = index => {
    setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }));
  };
  const renderReviewContent = (content, index) => {
    const isExpanded = expandedReviews[index];
    if (content.length <= 200 || isExpanded) {
      return (
        <>
          <p>{content}</p>
          {content.length > 200 && (
            <button
              onClick={() => toggleExpand(index)}
              className='fold-btn flex items-center gap-1'
            >
              <IoIosArrowUp />
              접기
            </button>
          )}
        </>
      );
    } else {
      return (
        <>
          <p className='inline'>{`${content.substring(0, 200)}...`}</p>
          <button
            onClick={() => toggleExpand(index)}
            className='more-btn inline'
          >
            [더보기]
          </button>
        </>
      );
    }
  };

  return (
    <div className='review-container flex w-full flex-col justify-center'>
      <div className='review-title flex items-center gap-4'>
        <a href=''>
          <FaArrowAltCircleLeft size={'30px'} />
        </a>
        <h1>리뷰</h1>
      </div>

      {reviews.map((review, reviewIndex) => (
        <div key={reviewIndex} className='review-box w-full'>
          <div className='flex w-full'>
            <div className='review-user flex h-full w-full items-center gap-2'>
              <FaRegUserCircle size='20' />
              <p>{review.userName}</p>
            </div>
            <div className='review-content flex w-full flex-col gap-4'>
              <div className='flex w-full justify-between'>
                <p className='review-grade flex gap-1'>
                  {[...Array(5)].map((star, index) => (
                    <FaStar
                      key={index}
                      fill={index < review.rating ? '#ffc400' : 'lightgray'}
                    />
                  ))}
                </p>
                <p>{review.reviewDate}</p>
              </div>
              <div className='review-preview w-full items-center'>
                {review.reviewImages.length > 4 &&
                  slideIndices[reviewIndex] > 0 && (
                    <FaChevronLeft
                      onClick={() =>
                        prevSlide(reviewIndex, review.reviewImages.length)
                      }
                      className='prev-left-btn'
                    />
                  )}
                <div className='w-full'>
                  {review.reviewImages
                    .slice(
                      slideIndices[reviewIndex],
                      slideIndices[reviewIndex] + 4,
                    )
                    .map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt=''
                        onClick={() =>
                          openModal(
                            review.reviewImages,
                            index + slideIndices[reviewIndex],
                          )
                        }
                      />
                    ))}
                </div>
                {review.reviewImages.length > 4 &&
                  slideIndices[reviewIndex] + 4 <
                    review.reviewImages.length && (
                    <FaChevronRight
                      onClick={() =>
                        nextSlide(reviewIndex, review.reviewImages.length)
                      }
                      className='prev-right-btn'
                    />
                  )}
              </div>
              <div className='review-comment flex flex-col gap-1'>
                <h3>{review.roomName}</h3>
                <p>{renderReviewContent(review.reviewContent, reviewIndex)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {modalIsOpen && (
        <div className='modal-backdrop'>
          <div className='modal-content relative flex items-center justify-center'>
            <button onClick={closeModal} className='rev-modal-close absolute'>
              <IoIosClose size={'40px'} />
            </button>
            <button onClick={prevImage} className='rev-modal-left absolute'>
              <FaChevronLeft />
            </button>
            <img
              src={currentImages[currentImageIndex]}
              className='rev-modal-img'
            />
            <button onClick={nextImage} className='rev-modal-right absolute'>
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;

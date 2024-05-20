import { useState } from 'react';

import { FaArrowAltCircleLeft, FaRegUserCircle, FaStar } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

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
      reviewContent: '정말 좋았어요.',
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
                <p>{review.reviewContent}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {modalIsOpen && (
        <div>
          <img src={currentImages[currentImageIndex]} alt='' />
          <button onClick={prevImage}>Prev</button>
          <button onClick={nextImage}>Next</button>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Review;

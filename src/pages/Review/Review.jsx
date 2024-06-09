import { useEffect, useState } from 'react';

import axios from 'axios';
import { FaArrowLeft, FaRegUserCircle, FaStar } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { IoIosArrowUp, IoIosClose } from 'react-icons/io';
import { useParams } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import './Review.css';

const Review = () => {
  const { id } = useParams();

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

  const handleGoBack = () => {
    window.history.back();
  };

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5173/dummy/reviews.json')
      .then(response => {
        const fetchedReviews = response.data.body.content.filter(
          review => review.hotelId === parseInt(id),
        );
        setReviews(fetchedReviews);
        setSlideIndices(fetchedReviews.map(() => 0));
      })
      .catch(error => {
        console.error('리뷰 조회 API 호출 실패:', error);
      });
  }, [id]);

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
        <button onClick={handleGoBack}>
          <FaArrowLeft size={'30px'} />
        </button>
        <h1>리뷰</h1>
      </div>

      {reviews.map((review, reviewIndex) => (
        <div key={reviewIndex} className='review-box w-full'>
          <div className='flex w-full'>
            <div className='review-user flex h-full w-full items-center gap-2'>
              {review.profileImageUrl ? (
                <img
                  src={review.profileImageUrl || pserLoading}
                  className='user-img'
                />
              ) : (
                <FaRegUserCircle size='30' />
              )}
              <p>{review.reviewerName}</p>
            </div>
            <div className='review-content flex w-full flex-col gap-4'>
              <div className='flex w-full justify-between'>
                <p className='review-grade flex gap-1'>
                  {[...Array(5)].map((star, index) => (
                    <FaStar
                      key={index}
                      fill={index < review.grade ? '#ffc400' : 'lightgray'}
                    />
                  ))}
                </p>
                <p>{new Date(review.createdAt).toLocaleDateString()}</p>
              </div>
              <div className='review-preview w-full items-center'>
                {review.imageUrls.length > 4 &&
                  slideIndices[reviewIndex] > 0 && (
                    <FaChevronLeft
                      onClick={() =>
                        prevSlide(reviewIndex, review.imageUrls.length)
                      }
                      className='prev-left-btn'
                    />
                  )}
                <div className='w-full'>
                  {review.imageUrls
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
                            review.imageUrls,
                            index + slideIndices[reviewIndex],
                          )
                        }
                      />
                    ))}
                </div>
                {review.imageUrls.length > 4 &&
                  slideIndices[reviewIndex] + 4 < review.imageUrls.length && (
                    <FaChevronRight
                      onClick={() =>
                        nextSlide(reviewIndex, review.imageUrls.length)
                      }
                      className='prev-right-btn'
                    />
                  )}
              </div>
              <div className='review-comment flex flex-col gap-1'>
                <h3>review.roomName</h3>
                <p>{renderReviewContent(review.detail, reviewIndex)}</p>
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

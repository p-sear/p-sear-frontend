import { useEffect, useState } from 'react';

import axios from 'axios';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import pserLoading from '../../assets/images/loading.png';
import ScrollToTop from '../../helpers/ScrollToTop';
import './MyReview.css';

const MyReview = () => {
  const [reservations, setReservations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 항목 수

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('인증 토큰이 없습니다.');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          'http://localhost:5173/dummy/myReservation.json',
          config,
        );
        const data = response.data.body.content;

        // 현재 날짜를 가져와서 체크인/체크아웃 날짜와 비교하여 완료된 예약만 필터링
        const now = new Date();
        const completedReservations = data.filter(reservation => {
          const checkOutDate = new Date(reservation.checkOut);
          return checkOutDate < now;
        });

        setReservations(completedReservations);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const totalPages = Math.ceil(reservations.length / itemsPerPage);

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }

    return pageNumbers;
  };

  const currentReservations = reservations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/review-register');
  };

  return (
    <div className='myreview-container flex flex-col'>
      <ScrollToTop />
      <h1>이용 후기</h1>

      <div className='myreview-box flex w-full flex-col items-center justify-center'>
        {currentReservations.map(reservation => (
          <div
            key={reservation.id}
            className='myreview-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <img
                src={reservation.mainImage || pserLoading}
                alt={reservation.name}
              />

              <div className='flex h-full items-center'>
                <div className='flex h-full flex-col justify-between'>
                  <p>숙소</p>
                  <p>객실</p>
                  <p>체크인/체크아웃</p>
                  <p>결제 금액</p>
                </div>
                <div className='flex h-full flex-col justify-between font-bold'>
                  <p>{reservation.name}</p>
                  <p>{reservation.roomType}</p>
                  <p>
                    {reservation.checkIn} ~ {reservation.checkOut}
                  </p>
                  <p>{reservation.price} 원</p>
                </div>
              </div>
            </div>

            <div className='flex h-full flex-col justify-between'>
              <p className='myrev-fin'>완료됨</p>
              <button className='myrev-btn' onClick={handleClick}>
                이용 후기 작성하기
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='pagination'>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft />
        </button>
        {renderPageNumbers()}
        <button
          onClick={() =>
            handlePageChange(Math.min(currentPage + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <MdKeyboardArrowRight />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MyReview;

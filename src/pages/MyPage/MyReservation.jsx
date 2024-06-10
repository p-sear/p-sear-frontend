import { useEffect, useState } from 'react';

import axios from 'axios';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

import emptyImg from '../../assets/icons/empty.png';
import pserLoading from '../../assets/images/loading.png';
import './MyReservation.css';

const MyReservation = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
          `${import.meta.env.VITE_PROD_API_SERVER}/search/reservations`,
          config,
        );
        const data = response.data.body.content;
        console.log(data);

        // // 현재 날짜를 가져와서 체크인/체크아웃 날짜와 비교하여 예정인 예약만 필터링
        // const now = new Date();
        // const upcomingReservations = data.filter(reservation => {
        //   const checkInDate = new Date(reservation.checkIn);
        //   return checkInDate > now;
        // });

        setReservations(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
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

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>에러 발생: {error.message}</div>;
  }

  const currentReservations = reservations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className='myreservation-container flex flex-col'>
      <h1>예약 내역</h1>

      <div className='myreservation-box flex w-full flex-col items-center justify-center'>
        {currentReservations.length > 0 ? (
          currentReservations.map(reservation => (
            <div
              key={reservation.id}
              className='myreservation-item flex w-full items-center justify-between gap-20'
            >
              <div className='flex h-full items-center'>
                <img src={reservation.hotel.mainImage || pserLoading} alt='' />

                <div className='flex h-full items-center'>
                  <div className='flex h-full flex-col justify-between'>
                    <p>숙소</p>
                    <p>객실</p>
                    <p>체크인/체크아웃</p>
                    <p>결제 금액</p>
                  </div>
                  <div className='flex h-full flex-col justify-between font-bold'>
                    <p>{reservation.hotel.name}</p>
                    <p>{reservation.room.name}</p>
                    <p>
                      {reservation.room.checkIn} ~ {reservation.room.checkOut}
                    </p>
                    <p>{reservation.room.price} 원</p>
                  </div>
                </div>
              </div>

              <a
                href={`/reservation-detail/${reservation.id}`}
                className='myres-detail-btn'
              >
                상세 조회 &gt;
              </a>
            </div>
          ))
        ) : (
          <div className='flex flex-col items-center justify-center gap-5'>
            <img src={emptyImg} alt='' style={{ width: '200px' }} />
            <p className='text-center'>
              예약 내역이 존재하지 않습니다.
              <br />
              예약을 통해 숙소를 이용해 보세요!
            </p>
          </div>
        )}
      </div>

      <div className='pagination'>
        {reservations.length > 0 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default MyReservation;

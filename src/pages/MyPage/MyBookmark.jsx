import { useEffect, useState } from 'react';

import axios from 'axios';
import { GoHeartFill } from 'react-icons/go';
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from 'react-icons/md';

import pserLoading from '../../assets/images/loading.png';
import './MyBookmark.css';

const MyBookmark = () => {
  const [bookmakrs, setBookmarks] = useState([]);

  const accessToken = localStorage.getItem('token');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // 페이지당 항목 수
  const totalPages = Math.ceil(bookmakrs.length / itemsPerPage);

  useEffect(() => {
    axios
      .get('http://localhost:5173/dummy/bookmark.json', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        setBookmarks(response.data.bookmark);
      })
      .catch(error => {
        console.error('찜 목록 조회 API 호출 에러:', error);
      });
  }, [accessToken]);

  // 숙소 찜(즐겨찾기) 취소 함수
  const cancelBookmark = hotel_id => {
    axios
      .delete('http://localhost:5173/dummy/bookmark.json', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: { status: 0, hotel_id },
      })
      .then(response => {
        console.log(response.data.message);
        // 즐겨찾기 취소 성공 후 목록 갱신
        setBookmarks(
          bookmakrs.filter(item => item.hotel_id !== hotel_id.toString()),
        );
      })
      .catch(error => {
        console.error('찜한 숙소 삭제 API 호출 에러:', error);
      });
  };

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

  const currentBookmakrs = bookmakrs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className='mybookmark-container flex flex-col'>
      <h1>찜한 숙소</h1>

      <div className='mybookmark-box flex w-full flex-col items-center justify-center'>
        {currentBookmakrs.map((bookmark, index) => (
          <div
            key={index}
            className='mybookmark-item flex w-full items-center justify-between gap-20'
          >
            <div className='flex h-full items-center'>
              <div className='mybookmark-img relative'>
                <img src={bookmark.hotelImage || pserLoading} alt='' />
                <GoHeartFill
                  className='mybookmark-heart absolute'
                  size={'30px'}
                  onClick={() => cancelBookmark(bookmark.hotel_id)}
                />
              </div>

              <div className='flex h-full items-center'>
                <div className='flex h-full flex-col justify-evenly'>
                  <p>숙소</p>
                  <p>숙박 가격</p>
                </div>
                <div className='flex h-full flex-col justify-evenly font-bold'>
                  <p>{bookmark.hotelName}</p>
                  <p>{bookmark.price} 원</p>
                </div>
              </div>
            </div>

            <a href='/hotel-reservation' className='mybook-reserve-btn'>
              예약하기 &gt;
            </a>
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

export default MyBookmark;

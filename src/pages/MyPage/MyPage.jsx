import { useState } from 'react';

import { IoIosArrowDropright } from 'react-icons/io';
import { IoCamera } from 'react-icons/io5';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';

import ScrollToTop from '../../helpers/ScrollToTop';
import MyBookmark from './MyBookmark';
import MyInfo from './MyInfo';
import './MyPage.css';
import MyReservation from './MyReservation';
import MyReview from './MyReview';
import MySetting from './MySetting';

const MyPage = () => {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  );
  const setPreview = event => {
    var reader = new FileReader();
    reader.onload = function (event) {
      setImage(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className='mypage-container flex w-full'>
      <ScrollToTop />
      <div className='flex h-full flex-col items-center justify-center gap-20'>
        <div className='profile-img relative'>
          <img src={image} alt='' />
          <label className='upload-btn' htmlFor='input-file'>
            <IoCamera className='camera-icon absolute' size={'40px'} />
          </label>
          <input
            type='file'
            id='input-file'
            style={{ display: 'none' }}
            onChange={setPreview}
          />
        </div>

        <nav className='flex h-full flex-col justify-center'>
          <NavLink
            to='/profile/info'
            className={({ isActive }) =>
              isActive ? 'link link-active' : 'link'
            }
          >
            나의 정보
            <IoIosArrowDropright className='right-arrow-icon' />
          </NavLink>
          <NavLink
            to='/profile/reservations'
            className={({ isActive }) =>
              isActive ? 'link link-active' : 'link'
            }
          >
            예약 내역
            <IoIosArrowDropright className='right-arrow-icon' />
          </NavLink>
          <NavLink
            to='/profile/reviews'
            className={({ isActive }) =>
              isActive ? 'link link-active' : 'link'
            }
          >
            이용 후기
            <IoIosArrowDropright className='right-arrow-icon' />
          </NavLink>
          <NavLink
            to='/profile/bookmarks'
            className={({ isActive }) =>
              isActive ? 'link link-active' : 'link'
            }
          >
            찜한 숙소
            <IoIosArrowDropright className='right-arrow-icon' />
          </NavLink>
          <a
            href='/hotel/new'
            className='flex items-center justify-between'
            style={{ color: 'gray' }}
          >
            숙소 등록
            <IoIosArrowDropright className='right-arrow-icon' />
          </a>
          <a
            href='/room/new'
            className='flex items-center justify-between'
            style={{ color: 'gray' }}
          >
            객실 등록
            <IoIosArrowDropright className='right-arrow-icon' />
          </a>
          <NavLink
            to='/profile/settings'
            className={({ isActive }) =>
              isActive ? 'link link-active' : 'link'
            }
          >
            설정
            <IoIosArrowDropright className='right-arrow-icon' />
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Navigate replace to='/profile/info' />} />
        <Route path='/info' element={<MyInfo />} />
        <Route path='/reservations' element={<MyReservation />} />
        <Route path='/bookmarks' element={<MyBookmark />} />
        <Route path='/reviews' element={<MyReview />} />
        <Route path='/settings' element={<MySetting />} />
      </Routes>
    </div>
  );
};

export default MyPage;

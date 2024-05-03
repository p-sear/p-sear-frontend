import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './MyPage.css';
import MyInfo from './MyInfo';
import MyReservation from './MyReservation';
import MySetting from './MySetting';
import { IoIosArrowDropright } from "react-icons/io";

const MyPage = () => {
    return (
        <div className='mypage-container flex'>
            <nav className='flex flex-col justify-center'>
                <NavLink to="/profile/info" className={({ isActive }) => (isActive ? 'link link-active' : 'link')}>
                    나의 정보
                    <IoIosArrowDropright className='right-arrow-icon'/>
                </NavLink>
                <NavLink to="/profile/reservations" className={({ isActive }) => (isActive ? 'link link-active' : 'link')}>
                    예약 내역
                    <IoIosArrowDropright className='right-arrow-icon' />
                </NavLink>
                <a href="/hotel/new" className='flex items-center justify-between' style={{color: 'gray'}}>
                    숙소 등록
                    <IoIosArrowDropright className='right-arrow-icon' />
                </a>
                <NavLink to="/profile/settings" className={({ isActive }) => (isActive ? 'link link-active' : 'link')}>
                    설정
                    <IoIosArrowDropright className='right-arrow-icon' />
                </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Navigate replace to="/profile/info" />} />
                <Route path="/info" element={<MyInfo />} />
                <Route path="/reservations" element={<MyReservation />} />
                <Route path="/settings" element={<MySetting />} />
            </Routes>
        </div>
    )
}

export default MyPage
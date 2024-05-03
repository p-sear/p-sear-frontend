import React from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './MyPage.css';
import MyInfo from './MyInfo';
import MyReservation from './MyReservation';
import MySetting from './MySetting';

const MyPage = () => {
    return (
        <div className='mypage-container'>
            <nav>
                <NavLink to="/profile/info" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>내 정보 확인</NavLink>
                <NavLink to="/profile/reservations" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>예약 내역</NavLink>
                <a href="/hotel/new">숙소 등록</a>
                <NavLink to="/profile/settings" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>설정</NavLink>
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
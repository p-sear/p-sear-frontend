import React from 'react'
import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import './Header.css';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false); // 로그인 후 이름 클릭시, 드롭 다운 메뉴
    const [showLogin, setShowLogin] = useState(false); // 로그인 폼 표시 상태

    return (
        <header className='flex content-center justify-between'>
            <a href="/"><img src={logo} alt="" className='logo'/></a>

            {/* <button className='flex items-center justify-center cursor-pointer header-btn' onClick={() => setShowDropdown(!showDropdown)}>
                <FaRegUserCircle size="20"/>
                <span>최혜빈님</span>
            </button>
            {showDropdown && (
            <div className='absolute top-12 flex flex-col items-center justify-center header-menu'>
            <a href="/mypage">마이페이지</a>
            <a href="">설정</a>
            <button onClick={logout}>로그아웃</button>
            </div>
            )} */}

            {user ? (
            <div>
            <button className='flex items-center justify-center cursor-pointer header-btn' onClick={() => setShowDropdown(!showDropdown)}>
                <FaRegUserCircle size="20"/>
                <span>{user.name}님</span>
            </button>
            {showDropdown && (
                <div className='absolute top-12 flex flex-col items-center justify-center header-menu'>
                    <a href="/mypage">마이페이지</a>
                    <a href="">설정</a>
                    <button onClick={logout}>로그아웃</button>
                </div>
            )}
            </div>
            ) : (
            <a href="/login" className='header-login-btn'>로그인/회원가입</a>
            )}

        </header>
    );
};

export default Header;
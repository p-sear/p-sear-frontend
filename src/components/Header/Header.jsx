import { useState } from 'react';

import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { useAuth } from '../../contexts/AuthContext';
import './Header.css';

const Header = () => {
  const { isLoggedIn, userInfo, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false); // 로그인 후 이름 클릭시, 드롭 다운 메뉴

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className='flex content-center justify-between'>
      <a href='/'>
        <img src={logo} alt='' className='logo' />
      </a>

      {isLoggedIn ? (
        <div>
          <button
            className='header-info-btn flex cursor-pointer items-center justify-center'
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <FaRegUserCircle size='20' />
            <span>{userInfo.name}님</span>
          </button>
          {showDropdown && (
            <div className='header-menu absolute top-12 flex flex-col items-center justify-center'>
              <a href='/profile'>마이페이지</a>
              <a href=''>설정</a>
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          )}
        </div>
      ) : (
        <a href='/login' className='header-login-btn'>
          로그인/회원가입
        </a>
      )}
    </header>
  );
};

export default Header;

import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';

import instagram from '../../assets/icons/insta.png';
import imgLogo from '../../assets/images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='flex flex-col'>
        <img src={imgLogo} alt='' className='footer-logo' />

        <div className='footer-nav flex justify-between'>
          <div className='service-box'>
            <h3>서비스</h3>
            <p>회사 소개</p>
            <p>자주 묻는 질문</p>
          </div>
          <div className='devNote-box'>
            <h3>개발자 노트</h3>
            <p>개발자 소개</p>
          </div>
          <div className='policy-box'>
            <h3>정보처리방침</h3>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <p>소비자 분정 해결 기준</p>
          </div>
          <div className='inquiry-box flex flex-col items-center justify-center'>
            <button className='tel-btn flex items-center justify-center'>
              <BsFillTelephoneFill />
              0000-0000
            </button>
            <button className='talk-btn flex items-center justify-center'>
              <RiKakaoTalkFill />
              카카오톡 문의
            </button>
          </div>
        </div>

        <div className='footer-icon flex items-center justify-between'>
          <p className='copy'>
            &copy; Copyright 2024, All Rights Reserved by Pser
          </p>

          <div className='flex items-center justify-center gap-2'>
            <img src={instagram} alt='' className='insta-icon' />
            <a href='https://github.com/p-ser' className='git-icon'>
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

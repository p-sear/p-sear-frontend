import React from 'react'
import { useState } from 'react';
import './Register.css';
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa6";
import SocialLogin from './SocialLogin';

const Register = () => {
    const[isOpen, setIsOpen] = useState(false); // 이용약관에서 +, - 버튼 초기값을 false로 설정
    const toggleMenu = () => {
        setIsOpen(isOpen=>!isOpen); // on, off
    }

    const [check, setCheck] = useState(false); // 이용약관 체크 박스 초기값을 false로 설정
    const toggleCheck = () => {
        setCheck(!check);
    };

    return (
        <div className="register-container flex flex-col">
            <div className='register-form flex flex-col'>
                <div className="name-box flex flex-col">
                    <h1>이름</h1>
                    <input type="text" placeholder='이름을 입력해주세요.'/>
                </div>
                <div className="email-box">
                    <h1>이메일</h1>
                    <input type="email" placeholder='이메일을 입력해주세요.'/>
                </div>
                <div className="pw-box">
                    <h1>비밀번호</h1>
                    <input type="password" placeholder='영문자, 숫자, 특수문자 포함 8~20자'/>
                </div>
                <div className="pwCheck-box">
                    <h1>비밀번호 확인</h1>
                    <input type="password" placeholder='비밀번호를 확인해주세요.'/>
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <p className='flex justify-center items-center gap-3'>
                    <div className='box cursor-pointer flex justify-center items-center' onClick={toggleCheck}>
                        {check ? <FaCheck /> : ''}
                    </div>
                    <span>전체 동의</span>
                </p>
                <span className='cursor-pointer' onClick={toggleMenu}>
                    { isOpen ? <FaMinus /> : <FaPlus /> }
                </span>
            </div>
            {isOpen && (
            <div className='detail-terms'>
                <p className='flex items-center gap-3'>
                    <div className='box cursor-pointer flex justify-center items-center' onClick={toggleCheck}>
                        {check ? <FaCheck /> : ''}
                    </div>
                    <span>[필수] 이용 약관 동의</span>
                </p>
                <p className='flex items-center gap-3'>
                    <div className='box cursor-pointer flex justify-center items-center' onClick={toggleCheck}>
                        {check ? <FaCheck /> : ''}
                    </div>
                    <span>[선택] 개인 정보 수집 및 이용 동의</span>
                </p>
                <p className='flex items-center gap-3'>
                    <div className='box cursor-pointer flex justify-center items-center' onClick={toggleCheck}>
                        {check ? <FaCheck /> : ''}
                    </div>
                    <span>[선택] 마케팅 활용 동의 및 광고 수신 동의</span>
                </p>
            </div>
            )}

            <button className='register-btn'>회원가입</button>

            <div>
                <SocialLogin />
            </div>
        </div>
    )
}

export default Register
import React from 'react'
import './Step1.css';
import hotelP from '../../assets/images/hotelinfo.png';

const Step1 = () => {
    return (
        <div className='step1-container flex flex-col items-center justify-center'>
            <img src={hotelP} alt="" />

            <h1>당신의 피서를 등록하세요!</h1>
            
            <div className='flex flex-col items-center justify-center step1-content'>
                <h3>피서 등록 순서</h3>
                <ul>
                    <li>🚩 숙소 정보 입력</li>
                    <li>🚩 숙소 사진 제출</li>
                    <li>🚩 사업자 인증</li>
                </ul>
            </div>
        </div>
    )
}

export default Step1
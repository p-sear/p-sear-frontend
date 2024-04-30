import React from 'react'
import './Step2.css';
import icon1 from '../../assets/icons/hotel_icon.png';
import icon2 from '../../assets/icons/motel_icon.png';
import icon3 from '../../assets/icons/hotel_icon.png';
import icon4 from '../../assets/icons/hotel_icon.png';
import icon5 from '../../assets/icons/hotel_icon.png';
import icon6 from '../../assets/icons/hotel_icon.png';
import icon7 from '../../assets/icons/hotel_icon.png';
import icon8 from '../../assets/icons/hotel_icon.png';
import icon9 from '../../assets/icons/hotel_icon.png';

const Step2 = () => {
    return (
        <div className='step2-container flex flex-col justify-center items-center'>
            <h1>숙소 정보를 알려주세요</h1>

            <div className="step2-category">
                <h3>숙소 카테고리</h3>
                <ul>
                    <li></li>
                </ul>
            </div>

            <div className="step2-name">
                <h3>숙소 이름</h3>
            </div>

            <div className="step2-address">
                <h3>숙소 위치</h3>
            </div>

            <div className="step2-info">
                <h3>숙소 소개</h3>
            </div>

            <div className="step2-thumnail">
                <h3>숙소 대표 이미지</h3>
            </div>

            <div className="step2-service">
                <h3>숙소 공통 서비스</h3>
            </div>

            <div className="step2-start">
                <h3>언제부터 예약을 받을 수 있나요?</h3>
            </div>

            <div className="step2-end">
                <h3>언제까지 예약을 받을까요?</h3>
            </div>

            <div className="step2-hotel-notice">
                <h3>예약 공지</h3>
            </div>
        </div>
    )
}

export default Step2
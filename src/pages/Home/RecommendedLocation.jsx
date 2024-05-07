import React from 'react'
import './RecommendedLocation.css';
import { IoIosArrowForward } from "react-icons/io";
import seoulImg from '../../assets/images/seoul.png';
import jejuImg from '../../assets/images/jeju.png';
import busanImg from '../../assets/images/busan.png';
import daejeonImg from '../../assets/images/daejeon.png';
import yangyangImg from '../../assets/images/yangyang.png';

const RecommendedLocation = () => {
    return (
        <div className="recLocation-container">
            <div className="recLocation-title flex justify-between items-center">
                <h1>추천 여행지</h1>
                <a href='' className='flex justify-center items-center'>더보기 <span><IoIosArrowForward /></span></a>
            </div>
            
            <div className="recLocation-content">
                <div>
                    <img src={seoulImg} alt="" />
                    <p>서울</p>
                </div>
                <div>
                    <img src={jejuImg} alt="" />
                    <p>제주</p>
                </div>
                <div>
                    <img src={busanImg} alt="" />
                    <p>부산</p>
                </div>
                <div>
                    <img src={daejeonImg} alt="" />
                    <p>대전</p>
                </div>
                <div>
                    <img src={yangyangImg} alt="" />
                    <p>양양</p>
                </div>
            </div>
        </div>
    )
}

export default RecommendedLocation
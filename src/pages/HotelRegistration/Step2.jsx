import React from 'react'
import { useState } from 'react';
import './Step2.css';
import icon1 from '../../assets/icons/hotel_icon.png';
import icon2 from '../../assets/icons/motel_icon.png';
import icon3 from '../../assets/icons/resort_icon.png';
import icon4 from '../../assets/icons/pension_icon.png';
import icon5 from '../../assets/icons/camp_icon.png';
import icon6 from '../../assets/icons/guest_icon.png';
import icon7 from '../../assets/icons/hanok_icon.png';
import icon8 from '../../assets/icons/pool_icon.png';
import icon9 from '../../assets/icons/house_icon.png';

import DateSelector from '../../components/Search/DateSelector';

import { FaCarSide, FaWifi, FaSmoking, FaFireBurner } from "react-icons/fa6";
import { FaSmokingBan, FaWineGlassAlt, FaInfoCircle, FaSwimmingPool, FaStore, FaSuitcaseRolling } from 'react-icons/fa';
import { TbBaguette } from "react-icons/tb";
import { PiLockersFill, PiThermometerHotFill, PiDogFill } from "react-icons/pi"
import { IoRestaurant } from "react-icons/io5";
import { IoIosFitness } from "react-icons/io";
import { MdOutdoorGrill } from "react-icons/md";
import { BiSolidDryer } from "react-icons/bi";

const Step2 = () => {
    const [thumbnail,setThumbnail] = useState("");
    const setPreview = (event) => {

        var reader = new FileReader();

        reader.onload = function(event) {
            setThumbnail(event.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className='step2-container flex flex-col justify-center items-center'>
            <h1>숙소 정보를 알려주세요</h1>

            <div className='step2-box flex flex-col justify-center items-center'>
                <div className="step2-category flex flex-col justify-center items-center">
                    <h3>숙소 카테고리</h3>
                    <ul className='step2-category-box'>
                        <li><img src={icon1} alt="" /><p>호텔</p></li>
                        <li><img src={icon2} alt="" /><p>모텔</p></li>
                        <li><img src={icon3} alt="" /><p>리조트</p></li>
                        <li><img src={icon4} alt="" /><p>펜션</p></li>
                        <li><img src={icon5} alt="" /><p>캠핑/글램핑</p></li>
                        <li><img src={icon6} alt="" /><p>게스트 하우스</p></li>
                        <li><img src={icon7} alt="" /><p>한옥</p></li>
                        <li><img src={icon8} alt="" /><p>풀빌라</p></li>
                        <li><img src={icon9} alt="" /><p>단독 주택</p></li>
                    </ul>
                </div>

                <div className="step2-name flex flex-col justify-center items-center">
                    <h3>숙소 이름</h3>
                    <input type="text" placeholder='숙소 이름을 입력하세요' />
                </div>

                <div className="step2-address w-full flex flex-col justify-center items-center">
                    <h3>숙소 위치</h3>
                    <div className='flex flex-col justify-center items-center gap-2 w-full'>
                        <input type="text" placeholder='숙소 위치를 입력하세요' />
                        <input type="text" placeholder='상세 주소 입력' />
                    </div>
                </div>

                <div className="step2-info w-full flex flex-col justify-center items-center">
                    <h3>숙소 소개</h3>
                    <textarea name="step2-info" id="step2-info" cols="30" rows="5" minLength={250} placeholder='최소 250자 이상 작성'></textarea>
                </div>

                <div className="step2-thumbnail flex flex-col justify-center items-center">
                    <h3>숙소 대표 이미지</h3>
                    <div className='flex flex-col justify-center items-center gap-3 w-full'>
                        <div className="step2-hotel-thumbnail flex justify-center items-center">
                            <img src={thumbnail} alt="" />
                        </div>
                        <label className="file-btn" for="input-file">사진 선택</label>
                        <input type="file" id="input-file" style={{display:"none"}}  onChange={setPreview}/>
                    </div>
                </div>

                <div className="step2-service flex flex-col justify-center items-center w-full">
                    <h3>숙소 공통 서비스</h3>
                    <ul className="step2-service-box w-full">
                        <li><FaCarSide size={30} />주차</li>
                        <li><TbBaguette size={30} />조식</li>
                        <li><FaWifi size={30} />와이파이</li>
                        <li><FaSmoking size={30} />흡연 구역</li>
                        <li><FaSmokingBan size={30} />객실 금연</li>
                        <li><FaWineGlassAlt size={30} />루프탑</li>
                        <li><FaInfoCircle size={30} />24시간 데스크</li>
                        <li><PiLockersFill size={30} />수화물 보관</li>
                        <li><PiThermometerHotFill size={30} />스파</li>
                        <li><IoRestaurant size={30} />레스토랑</li>
                        <li><IoIosFitness size={30} />피트니스</li>
                        <li><FaFireBurner size={30} />사우나</li>
                        <li><FaSwimmingPool size={30} />수영장</li>
                        <li><MdOutdoorGrill size={30}/>BBQ</li>
                        <li><FaStore size={30}/>매점</li>
                        <li><BiSolidDryer size={30}/>건조기</li>
                        <li><FaSuitcaseRolling size={30}/>짐 보관</li>
                        <li><PiDogFill size={30}/>반려견 동반</li>
                    </ul>
                </div>

                <div className="step2-reservation flex flex-col justify-center items-center">
                    <h3>예약 가능 기간</h3>
                    <div className='step2-date w-full'>
                        <DateSelector />
                    </div>
                </div>

                <div className="step2-notice flex flex-col justify-center items-center">
                    <h3>예약 공지</h3>
                    <textarea name="step2-notice" id="step2-notice" cols="30" rows="5" placeholder='이용자에게 전달하고 싶은 말이 있다면 작성해주세요'></textarea>
                </div>
            </div>
        </div>
    )
}

export default Step2
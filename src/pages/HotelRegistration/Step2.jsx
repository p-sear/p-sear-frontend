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

    // 숙소 카테고리 버튼에 사용될 아이콘
    const icons = [
        { src: icon1, alt: "", name: "호텔" },
        { src: icon2, alt: "", name: "모텔" },
        { src: icon3, alt: "", name: "리조트" },
        { src: icon4, alt: "", name: "펜션" },
        { src: icon5, alt: "", name: "캠핑/글램핑" },
        { src: icon6, alt: "", name: "게스트 하우스" },
        { src: icon7, alt: "", name: "한옥" },
        { src: icon8, alt: "", name: "풀빌라" },
        { src: icon9, alt: "", name: "단톡 주택" },
    ];
    const [selected, setSelected] = useState(null);
    const handleSelect = (index) => {
        if (selected === index) {
        setSelected(null); // 이미 선택된 항목을 다시 클릭하면 선택 취소
        } else {
        setSelected(index); // 다른 항목을 클릭하면 선택
        }
    };


    // 숙소 서비스 버튼에 사용될 아이콘
    const services = [
        { Icon: FaCarSide, name: '주차' },
        { Icon: TbBaguette, name: '조식' },
        { Icon: FaWifi, name: '와이파이' },
        { Icon: FaSmoking, name: '흡연 구역' },
        { Icon: FaSmokingBan, name: '객실 금연' },
        { Icon: FaWineGlassAlt, name: '루프탑' },
        { Icon: FaInfoCircle, name: '24시간 데스크' },
        { Icon: PiLockersFill, name: '수화물 보관' },
        { Icon: PiThermometerHotFill, name: '스파' },
        { Icon: IoRestaurant, name: '레스토랑' },
        { Icon: IoIosFitness, name: '피트니스' },
        { Icon: FaFireBurner, name: '사우나' },
        { Icon: FaSwimmingPool, name: '수영장' },
        { Icon: MdOutdoorGrill, name: 'BBQ' },
        { Icon: FaStore, name: '매점' },
        { Icon: BiSolidDryer, name: '건조기' },
        { Icon: FaSuitcaseRolling, name: '짐 보관' },
        { Icon: PiDogFill, name: '반려견 동반' },
    ];
    const [selectedItems, setSelectedItems] = useState([]);
    const toggleItem = (name) => {
        setSelectedItems(
            selectedItems.includes(name)
            ? selectedItems.filter((i) => i !== name)
            : [...selectedItems, name]
        );
    };

    return (
        <div className='step2-container flex flex-col justify-center items-center'>
            <h1>숙소 정보를 알려주세요</h1>

            <div className='step2-box flex flex-col justify-center items-center'>
                <div className="step2-category flex flex-col justify-center items-center">
                    <h3>숙소 카테고리</h3>
                    <ul className='step2-category-box'>
                    {icons.map((icon, index) => (
                        <li 
                        key={index}
                        className={selected === index ? 'selected' : ''} 
                        onClick={() => handleSelect(index)}
                        >
                        <img src={icon.src} alt={icon.alt} />
                        <p>{icon.name}</p>
                        </li>
                    ))}
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
                    {services.map(({ Icon, name }, index) => (
                        <li key={index} className={selectedItems.includes(name) ? 'selected' : ''} onClick={() => toggleItem(name)}>
                        <Icon size={30} />{name}
                        </li>
                    ))}
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
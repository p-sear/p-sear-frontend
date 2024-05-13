import { useState } from 'react';

import { IoIosClose } from 'react-icons/io';

import KakaoMap from './KakaoMap';
import './MapModal.css';
import RangeSlider from './RangeSlider';

const MapModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const hotelCategory = [
    '전체',
    '호텔',
    '모텔',
    '리조트',
    '펜션',
    '캠핑/글램핑',
    '게스트하우스',
    '한옥',
    '풀빌라',
    '단독 주택',
  ];

  const [selected, setSelected] = useState([]);

  const handleSelect = category => {
    if (category === '전체') {
      if (
        selected.includes('전체') ||
        selected.length === hotelCategory.length - 1
      ) {
        setSelected([]);
      } else {
        setSelected([...hotelCategory]);
      }
    } else {
      setSelected(prevSelected =>
        prevSelected.includes(category)
          ? prevSelected.filter(item => item !== category)
          : [...prevSelected, category],
      );
    }
  };

  const publicServices = [
    '주차',
    '조식',
    '와이파이',
    '흡연 구역',
    '건조기',
    '루프탑',
    '24시간 데스크',
    '짐 보관',
    '매점',
    '반려견 동반',
    '레스토랑',
    '피트니스',
    '사우나',
    '수영장',
    'BBQ',
  ];
  const roomServices = [
    'TV',
    '와이파이',
    'PC',
    'OTT',
    '금연',
    '흡연 가능',
    '객실 스파',
    '미니바',
    '에어컨',
    '욕실 용품',
    '객실 내 취사',
    '반려견 동반',
  ];

  const [selectedPublicServices, setSelectedPublicServices] = useState([]);
  const [selectedRoomServices, setSelectedRoomServices] = useState([]);

  const handleSelectPublicService = service => {
    setSelectedPublicServices(prev =>
      prev.includes(service)
        ? prev.filter(f => f !== service)
        : [...prev, service],
    );
  };

  const handleSelectRoomService = service => {
    setSelectedRoomServices(prev =>
      prev.includes(service)
        ? prev.filter(f => f !== service)
        : [...prev, service],
    );
  };

  return (
    <div className='mapmodal-container relative flex justify-center'>
      <p onClick={onClose}>
        <IoIosClose className='mapmodal-close absolute' size={'50px'} />
      </p>
      <div className='mapmodal-filter w-full'>
        <h1>필터</h1>
        <div className='mapmodal-filter-box'>
          <div className='filter-category'>
            <h3>숙소 유형</h3>
            <ul>
              {hotelCategory.map((category, index) => (
                <li
                  key={index}
                  className={selected.includes(category) ? 'selected' : ''}
                >
                  <div
                    onClick={() => handleSelect(category)}
                    className='circle'
                  ></div>
                  <p onClick={() => handleSelect(category)}>{category}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className='filter-price'>
            <h3>가격</h3>
            <div>
              <RangeSlider />
            </div>
          </div>

          <div className='filter-publicService'>
            <h3>공용 시설</h3>
            <div>
              {publicServices.map((service, index) => (
                <button
                  key={index}
                  className={
                    selectedPublicServices.includes(service)
                      ? 'service-selected'
                      : 'service-btn'
                  }
                  onClick={() => handleSelectPublicService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-roomService'>
            <h3>객실 내 시설</h3>
            <div>
              {roomServices.map((service, index) => (
                <button
                  key={index}
                  className={
                    selectedRoomServices.includes(service)
                      ? 'service-selected'
                      : 'service-btn'
                  }
                  onClick={() => handleSelectRoomService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='mapmodal-map w-full'>
        <h1>지도</h1>
        <div className='w-full' style={{ backgroundColor: 'transparent' }}>
          <KakaoMap />
        </div>
      </div>
    </div>
  );
};

export default MapModal;

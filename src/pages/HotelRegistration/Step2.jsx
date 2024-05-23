import { useState } from 'react';

import axios from 'axios';
import { BiSolidDryer } from 'react-icons/bi';
import {
  FaInfoCircle,
  FaSmokingBan,
  FaStore,
  FaSuitcaseRolling,
  FaSwimmingPool,
  FaWineGlassAlt,
} from 'react-icons/fa';
import { FaCarSide, FaFireBurner, FaSmoking, FaWifi } from 'react-icons/fa6';
import { IoIosFitness } from 'react-icons/io';
import { IoRestaurant } from 'react-icons/io5';
import { MdOutdoorGrill } from 'react-icons/md';
import { PiDogFill, PiLockersFill, PiThermometerHotFill } from 'react-icons/pi';
import { TbBaguette } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import icon5 from '../../assets/icons/camp_icon.png';
import icon6 from '../../assets/icons/guest_icon.png';
import icon7 from '../../assets/icons/hanok_icon.png';
import icon1 from '../../assets/icons/hotel_icon.png';
import icon9 from '../../assets/icons/house_icon.png';
import icon2 from '../../assets/icons/motel_icon.png';
import icon4 from '../../assets/icons/pension_icon.png';
import icon8 from '../../assets/icons/pool_icon.png';
import icon3 from '../../assets/icons/resort_icon.png';
import hotelInfoState from '../../recoils/hotelInfoState.js';
import './Step2.css';

const Step2 = () => {
  const [thumbnail, setThumbnail] = useState('');
  const [fileImg, setFileImg] = useState(null);
  const [hotelInfo, setHotelInfo] = useRecoilState(hotelInfoState);
  const navigate = useNavigate();

  const updateInfo = (key, value) => {
    setHotelInfo(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const setPreview = event => {
    const reader = new FileReader();
    const file = event.target.files;

    reader.onload = event => {
      setThumbnail(event.target.result);
      setFileImg(file);
    };

    reader.readAsDataURL(file[0]);
  };

  // 숙소 카테고리 버튼에 사용될 아이콘
  const icons = [
    { src: icon1, alt: '', name: '호텔' },
    { src: icon2, alt: '', name: '모텔' },
    { src: icon3, alt: '', name: '리조트' },
    { src: icon4, alt: '', name: '펜션' },
    { src: icon5, alt: '', name: '캠핑/글램핑' },
    { src: icon6, alt: '', name: '게스트 하우스' },
    { src: icon7, alt: '', name: '한옥' },
    { src: icon8, alt: '', name: '풀빌라' },
    { src: icon9, alt: '', name: '단톡 주택' },
  ];
  const [selected, setSelected] = useState(null);
  const handleSelect = index => {
    if (selected === index) {
      setSelected(null); // 이미 선택된 항목을 다시 클릭하면 선택 취소
    } else {
      setSelected(index); // 다른 항목을 클릭하면 선택
    }
  };

  // 숙소 서비스 버튼에 사용될 아이콘
  const services = [
    { Icon: FaCarSide, name: '주차', value: 'parking' },
    { Icon: TbBaguette, name: '조식', value: 'breakfast' },
    { Icon: FaWifi, name: '와이파이', value: 'wifi' },
    { Icon: FaSmoking, name: '흡연 구역', value: 'cigarette' },
    { Icon: FaSmokingBan, name: '객실 금연', value: 'noCigarette' },
    { Icon: FaWineGlassAlt, name: '루프탑', value: 'looftop' },
    { Icon: FaInfoCircle, name: '24시간 데스크', value: 'allDayDesk' },
    { Icon: PiLockersFill, name: '수화물 보관', value: 'luggageKeep' },
    { Icon: PiThermometerHotFill, name: '스파', value: 'spa' },
    { Icon: IoRestaurant, name: '레스토랑', value: 'restaurant' },
    { Icon: IoIosFitness, name: '피트니스', value: 'fitness' },
    { Icon: FaFireBurner, name: '사우나', value: 'sauna' },
    { Icon: FaSwimmingPool, name: '수영장', value: 'swimming' },
    { Icon: MdOutdoorGrill, name: 'BBQ', value: 'bbq' },
    { Icon: FaStore, name: '매점', value: 'market' },
    { Icon: BiSolidDryer, name: '건조기', value: 'dryer' },
    { Icon: FaSuitcaseRolling, name: '짐 보관', value: 'loadKeep' },
    { Icon: PiDogFill, name: '반려견 동반', value: 'pet' },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = (name, value) => {
    if (selectedItems.includes(name)) {
      setSelectedItems(selectedItems.filter(i => i !== name));
      updateInfo(value, false);
    } else {
      setSelectedItems([...selectedItems, name]);
      updateInfo(value, true);
    }
    console.log(hotelInfo);
  };

  const handleSubmit = async () => {
    if (
      hotelInfo.name == undefined ||
      hotelInfo.category == undefined ||
      hotelInfo.province == undefined ||
      hotelInfo.city == undefined ||
      hotelInfo.district == undefined ||
      hotelInfo.detailedAddress == undefined ||
      hotelInfo.description == undefined ||
      hotelInfo.notice == undefined
    ) {
      alert('입력사항을 모두 입력해주세요.');
      navigate('/hotel/new');
      return;
    }
    const formData = new FormData();
    formData.append('files', fileImg);

    fetchImg(formData);
  };

  const fetchImg = async () => {
    await axios
      .get('http://localhost:5173/dummy/imageSave.json')
      // .post('http://1.228.166.90:8000/storage/image/files', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      .then(imgRes => {
        console.log(imgRes.data.body.fileNames[0]);
        const data = `{
            "category":${hotelInfo.category},
            "name":${hotelInfo.name},
            "description":${hotelInfo.description},
            "notice":${hotelInfo.notice},
            "province":${hotelInfo.province},
            "city":${hotelInfo.city},
            "district":${hotelInfo.district},
            "detailedAddress":${hotelInfo.detailedAddress},
            "mainImage":${imgRes.data.body.fileNames[0]},
            "certUrl":"",
            "visitGuidance"${hotelInfo.visitGuidance}
            "parking":${hotelInfo.parking},
            "breakfast":${hotelInfo.breakfast},
            "wifi":${hotelInfo.wifi},
            "cigarette":${hotelInfo.cigarette},
            "noCigarette":${hotelInfo.noCigarette},
            "looftop:${hotelInfo.looftop},
            "allDayDesk":${hotelInfo.allDayDesk},
            "luggageKeep":${hotelInfo.luggageKeep},
            "spar":${hotelInfo.spar},
            "restaurant":${hotelInfo.restaurant},
            "fitness":${hotelInfo.fitness},
            "sauna":${hotelInfo.sauna},
            "swimming":${hotelInfo.swimming},
            "bbq":${hotelInfo.bbq},
            "market":${hotelInfo.market},
            "dryer":${hotelInfo.dryer},
            "loadKeep":${hotelInfo.loadKeep},
            "pet":${hotelInfo.pet}
          }`;
        console.log(data);
        axios
          .get('http://localhost:5173/dumy/fail.json', data)
          .then(hotelRes => {
            if (hotelRes.status == 200) {
              console.log('호텔 생성');
              navigate('/');
            }
          })
          .catch(err => {
            console.log(err);
            navigate('/hotel/new');
          });
      })
      .catch(err => {
        console.log(err);
        navigate('/hotel/new');
      });
  };

  return (
    <div className='step2-container flex flex-col items-center justify-center'>
      <h1>숙소 정보를 알려주세요</h1>

      <div className='step2-box flex flex-col items-center justify-center'>
        <div className='step2-category flex flex-col items-center justify-center'>
          <h3>숙소 카테고리</h3>
          <ul className='step2-category-box'>
            {icons.map((icon, index) => (
              <li
                key={index}
                className={selected === index ? 'selected' : ''}
                onClick={() => {
                  handleSelect(index);
                  updateInfo('category', index);
                }}
              >
                <img src={icon.src} alt={icon.alt} />
                <p>{icon.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='step2-name flex flex-col items-center justify-center'>
          <h3>숙소 이름</h3>
          <input
            type='text'
            placeholder='숙소 이름을 입력하세요'
            onChange={e => updateInfo('name', e.target.value)}
          />
        </div>

        <div className='step2-address flex w-full flex-col items-center justify-center'>
          <h3>숙소 위치</h3>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            <input
              type='text'
              placeholder='시/도를 입력하세요.'
              onChange={e => updateInfo('province', e.target.value)}
            />
            <input
              type='text'
              placeholder='시/군/구를 입력하세요'
              onChange={e => updateInfo('city', e.target.value)}
            />
            <input
              type='text'
              placeholder='읍/면/동을 입력하세요'
              onChange={e => updateInfo('district', e.target.value)}
            />
            <input
              type='text'
              placeholder='상세 주소 입력'
              onChange={e => updateInfo('detailedAddress', e.target.value)}
            />
          </div>
        </div>

        <div className='step2-info flex w-full flex-col items-center justify-center'>
          <h3>숙소 소개</h3>
          <textarea
            name='step2-info'
            id='step2-info'
            cols='30'
            rows='5'
            minLength={250}
            placeholder='최소 250자 이상 작성'
            onChange={e => updateInfo('description', e.target.value)}
          ></textarea>
        </div>

        <div className='step2-thumbnail flex flex-col items-center justify-center'>
          <h3>숙소 대표 이미지</h3>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <div className='step2-hotel-thumbnail flex items-center justify-center'>
              <img src={thumbnail} alt='' />
            </div>
            <label className='file-btn' htmlFor='input-file'>
              사진 선택
            </label>
            <input
              type='file'
              id='input-file'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={e => setPreview(e)}
            />
          </div>
        </div>

        <div className='step2-service flex w-full flex-col items-center justify-center'>
          <h3>숙소 공통 서비스</h3>
          <ul className='step2-service-box w-full'>
            {services.map(({ Icon, name, value }, index) => (
              <li
                key={index}
                className={selectedItems.includes(name) ? 'selected' : ''}
                onClick={() => toggleItem(name, value)}
              >
                <Icon size={30} />
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div>{selectedItems}</div>
        <div className='step2-notice flex flex-col items-center justify-center'>
          <h3>예약 공지</h3>
          <textarea
            name='step2-notice'
            id='step2-notice'
            cols='30'
            rows='5'
            placeholder='이용자에게 전달하고 싶은 말이 있다면 작성해주세요'
            onChange={e => updateInfo('notice', e.target.value)}
          ></textarea>
        </div>
        <div>{hotelInfo.notice}</div>
        <div className='next-btn flex justify-center'>
          <button
            className='w-full'
            onClick={() => {
              handleSubmit();
            }}
          >
            호텔 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2;

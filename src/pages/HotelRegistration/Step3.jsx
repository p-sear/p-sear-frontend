import { useState } from 'react';

import { FaSmokingBan } from 'react-icons/fa';
import { FaComputer, FaSmoking, FaWifi } from 'react-icons/fa6';
import { GiTowel, GiWineBottle } from 'react-icons/gi';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import {
  PiCookingPotBold,
  PiDogFill,
  PiThermometerHotFill,
} from 'react-icons/pi';
import { SiNetflix } from 'react-icons/si';
import { TbAirConditioning } from 'react-icons/tb';

import './Step3.css';

const Step3 = () => {
  const roomTypes = [
    { id: 'king', label: '킹 사이즈' },
    { id: 'queen', label: '퀸 사이즈' },
    { id: 'single', label: '싱글 사이즈' },
    { id: 'supersingle', label: '슈퍼싱글 사이즈' },
    { id: 'double', label: '더블 사이즈' },
  ];

  const services = [
    { Icon: PiTelevisionSimpleBold, name: 'TV' },
    { Icon: FaWifi, name: '와이파이' },
    { Icon: FaComputer, name: 'PC' },
    { Icon: SiNetflix, name: 'OTT' },
    { Icon: FaSmokingBan, name: '금연' },
    { Icon: FaSmoking, name: '흡연 가능' },
    { Icon: PiThermometerHotFill, name: '객실 스파' },
    { Icon: GiWineBottle, name: '미니바' },
    { Icon: TbAirConditioning, name: '에어컨' },
    { Icon: GiTowel, name: '욕실 용품' },
    { Icon: PiCookingPotBold, name: '객실 내 취사' },
    { Icon: PiDogFill, name: '반려견 동반' },
  ];
  const [selectedItems, setSelectedItems] = useState([]);
  const toggleItem = name => {
    setSelectedItems(
      selectedItems.includes(name)
        ? selectedItems.filter(i => i !== name)
        : [...selectedItems, name],
    );
  };

  const [image, setImage] = useState('');
  const setPreview = event => {
    var reader = new FileReader();

    reader.onload = function (event) {
      setImage(event.target.result);
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className='step3-container flex flex-col items-center justify-center'>
      <h1>객실 등록</h1>

      <div className='step3-box flex w-full flex-col items-center justify-center'>
        <div className='step3-name w-full'>
          <h3>객실 이름</h3>
          <input type='text' placeholder='객실 이름을 입력하세요' />
        </div>

        <div className='step3-width w-full'>
          <h3>면적</h3>
          <div className='flex w-full items-center justify-center gap-1'>
            <input type='text' placeholder='객실의 면적을 입력하세요' />
            <span className='text-xl'>㎡</span>
          </div>
        </div>

        <div className='step3-bed w-full'>
          <h3>침대 개수</h3>
          <div className='flex w-full flex-col items-center justify-center gap-2'>
            {roomTypes.map(room => (
              <div
                key={room.id}
                className='bed-num flex w-full items-center justify-between'
              >
                <p>{room.label}</p>
                <select name={room.id} id={room.id}>
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className='step3-standard w-full'>
          <h3>기준 인원</h3>
          <div className='flex w-full items-center justify-center gap-1'>
            <input type='text' placeholder='최소 인원을 작성해주세요' />
            <span className='text-xl'>명</span>
          </div>
        </div>

        <div className='step3-possible w-full'>
          <h3>수용 인원</h3>
          <div className='flex w-full items-center justify-center gap-1'>
            <input type='text' placeholder='최대 인원을 작성해주세요' />
            <span className='text-xl'>명</span>
          </div>
        </div>

        <div className='step3-service w-full'>
          <h3>객실 시설</h3>
          <ul className='step3-service-box w-full'>
            {services.map(({ Icon, name }, index) => (
              <li
                key={index}
                className={selectedItems.includes(name) ? 'selected' : ''}
                onClick={() => toggleItem(name)}
              >
                <Icon size={30} />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className='step3-image w-full'>
          <h3>객실 이미지</h3>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <div className='step3-room-image flex items-center justify-center'>
              <img src={image} alt='' />
            </div>
            <label className='file-btn' htmlFor='input-file'>
              사진 선택
            </label>
            <input
              type='file'
              id='input-file'
              style={{ display: 'none' }}
              onChange={setPreview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;

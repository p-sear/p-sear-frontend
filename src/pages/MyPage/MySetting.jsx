import { useState } from 'react';

import './MySetting.css';

const MySetting = () => {
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [isSmsChecked, setIsSmsChecked] = useState(false);
  const [isKakaoChecked, setIsKakaoChecked] = useState(false);

  const isAllChecked = isEmailChecked || isSmsChecked || isKakaoChecked;

  const handleCheckboxChange = setter => e => {
    setter(e.target.checked);
  };

  const handleAllCheckedChange = e => {
    const isChecked = e.target.checked;
    setIsEmailChecked(isChecked);
    setIsSmsChecked(isChecked);
    setIsKakaoChecked(isChecked);
  };

  return (
    <div className='mysetting-container flex flex-col'>
      <div className='flex flex-col'>
        <h1>설정</h1>
        <p>경매 마감, 타임 특가 등 이벤트 정보를 빠르게 알려드립니다.</p>
      </div>

      <div className='mysetting-box flex flex-col'>
        <div className='mysetting-checkbox flex flex-col'>
          <p className='flex items-center gap-3'>
            <input
              type='checkbox'
              style={{ scale: '1.5' }}
              checked={isAllChecked}
              onChange={handleAllCheckedChange}
            />
            <span>알림 수신 동의(선택)</span>
          </p>
          <p className='flex items-center gap-3'>
            <p>⌞</p>
            <input
              type='checkbox'
              style={{ scale: '1.5' }}
              checked={isEmailChecked}
              onChange={handleCheckboxChange(setIsEmailChecked)}
            />
            <span>이메일</span>
          </p>
          <p className='flex items-center gap-3'>
            <p>⌞</p>
            <input
              type='checkbox'
              style={{ scale: '1.5' }}
              checked={isSmsChecked}
              onChange={handleCheckboxChange(setIsSmsChecked)}
            />
            <span>문자</span>
          </p>
          <p className='flex items-center gap-3'>
            <p>⌞</p>
            <input
              type='checkbox'
              style={{ scale: '1.5' }}
              checked={isKakaoChecked}
              onChange={handleCheckboxChange(setIsKakaoChecked)}
            />
            <span>카카오톡</span>
          </p>
        </div>

        <div className='mysetting-btnl flex flex-col'>
          <button className='mysettig-save-btn'>저장</button>
        </div>
      </div>
    </div>
  );
};

export default MySetting;

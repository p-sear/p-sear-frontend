import { useState } from 'react';

import './Step5.css';

const Step5 = () => {
  const [identityCardImage, setIdentityCardImage] = useState('');
  const [businessCardImage, setBusinessCardImage] = useState('');

  // setPreview 함수에 상태 업데이트 함수(setImage)를 인자로 받게 수정
  const setPreview = setImage => event => {
    var reader = new FileReader();

    reader.onload = function (event) {
      setImage(event.target.result); // 인자로 받은 setImage를 사용해 상태 업데이트
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className='step5-conatiner flex flex-col items-center justify-center'>
      <h1>사업자 인증</h1>

      <div className='step5-box flex w-full flex-col items-center justify-center'>
        <div className='identification-card flex w-full flex-col items-center justify-center'>
          <h3>주민등록증</h3>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <div className='step5-image flex items-center justify-center'>
              <img src={identityCardImage} alt='' />
            </div>
            <label className='file-btn' htmlFor='identity-card-file'>
              사진 선택
            </label>
            <input
              type='file'
              id='identity-card-file'
              style={{ display: 'none' }}
              onChange={setPreview(setIdentityCardImage)}
            />
          </div>
        </div>
        <div className='business-card flex w-full flex-col items-center justify-center'>
          <h3>사업자등록증</h3>
          <div className='flex w-full flex-col items-center justify-center gap-3'>
            <div className='step5-image flex items-center justify-center'>
              <img src={businessCardImage} alt='' />
            </div>
            <label className='file-btn' htmlFor='business-card-file'>
              사진 선택
            </label>
            <input
              type='file'
              id='business-card-file'
              style={{ display: 'none' }}
              onChange={setPreview(setBusinessCardImage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;

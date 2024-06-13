import { useEffect, useState } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';

import userinfoState from '../../recoils/userinfoState';
import './MyInfo.css';

const MyInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userinfoState);
  const [editMode, setEditMode] = useState({
    username: false,
    email: false,
    tel: false,
    password: false,
    description: false,
  });
  const [tempInfo, setTempInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('token'); // 토큰 로컬 스토리지에서 가져옴
        const response = await axios.get('http://localhost:5173/dummy/member', {
          headers: {
            authorization: `Bearer ${token}`, // 헤더에 토큰을 추가
          },
        });
        setUserInfo({
          id: response.data.userId,
          email: response.data.email,
          username: response.data.userName,
          tel: response.data.tel,
          description: response.data.description,
        });
      } catch (error) {
        console.error('회원 조회 API 호출 실패:', error);
      }
    };

    fetchUserInfo();
  }, [setUserInfo]);

  const handleEditClick = field => {
    setTempInfo({ ...userInfo });
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSaveClick = field => {
    setUserInfo({ ...userInfo, [field]: tempInfo[field] });
    setEditMode({ ...editMode, [field]: false });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setTempInfo({ ...tempInfo, [name]: value });
  };

  return (
    <div className='myinfo-container flex flex-col'>
      <h1>나의 정보</h1>

      <div className='myinfo-box flex flex-col justify-center'>
        <div className='myinfo-name flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>이름</h3>
            {editMode.username ? (
              <input
                type='text'
                name='username'
                value={tempInfo.username}
                onChange={handleChange}
              />
            ) : (
              <p>
                {userInfo.username == null
                  ? localStorage.getItem('username')
                  : userInfo.username}
              </p>
            )}
          </div>
          <button
            onClick={() =>
              editMode.username
                ? handleSaveClick('username')
                : handleEditClick('username')
            }
          >
            {editMode.username ? '저장하기' : '변경하기'}
          </button>
        </div>
        <div className='myinfo-email flex flex-col justify-center gap-3'>
          <h3>이메일</h3>
          <p>
            {userInfo.email == null
              ? localStorage.getItem('email')
              : userInfo.email}
          </p>
        </div>
        <div className='myinfo-tel flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>휴대폰 번호</h3>
            {editMode.tel ? (
              <input
                type='tel'
                name='tel'
                value={tempInfo.tel}
                onChange={handleChange}
              />
            ) : (
              <p>
                {userInfo.tel == null
                  ? localStorage.getItem('tel')
                  : userInfo.tel}
              </p>
            )}
          </div>
          <button
            onClick={() =>
              editMode.tel ? handleSaveClick('tel') : handleEditClick('tel')
            }
          >
            {editMode.tel ? '저장하기' : '변경하기'}
          </button>
        </div>
        <div className='myinfo-pw flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>비밀번호</h3>
            {editMode.password ? (
              <input
                type='password'
                name='password'
                value={tempInfo.password}
                onChange={handleChange}
                className='pw-input'
              />
            ) : (
              <input
                type='password'
                value={
                  userInfo.password == null
                    ? localStorage.getItem('password')
                    : userInfo.password
                }
                className='pw-saved'
              />
            )}
          </div>
          <button
            onClick={() =>
              editMode.password
                ? handleSaveClick('password')
                : handleEditClick('password')
            }
          >
            {editMode.password ? '저장하기' : '변경하기'}
          </button>
        </div>
        <div className='myinfo-intro flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>자기소개</h3>
            {editMode.description ? (
              <textarea
                name='description'
                value={tempInfo.description}
                onChange={handleChange}
              />
            ) : (
              <p>
                {userInfo.description == null
                  ? localStorage.getItem('description')
                  : userInfo.description}
              </p>
            )}
          </div>
          <button
            onClick={() =>
              editMode.description
                ? handleSaveClick('description')
                : handleEditClick('description')
            }
          >
            {editMode.description ? '저장하기' : '변경하기'}
          </button>
        </div>

        <button className='exit-btn'>회원 탈퇴</button>
      </div>
    </div>
  );
};

export default MyInfo;

import { useEffect } from 'react';

import axios from 'axios';
import { useRecoilState } from 'recoil';

import userinfoState from '../../recoils/userinfoState';
import './MyInfo.css';

const MyInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userinfoState);

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

  return (
    <div className='myinfo-container flex flex-col'>
      <h1>나의 정보</h1>

      <div className='myinfo-box flex flex-col justify-center'>
        <div className='myinfo-name flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>이름</h3>
            <p>
              {userInfo.username == null
                ? localStorage.getItem('username')
                : userInfo.username}
            </p>
          </div>
          <button>변경하기</button>
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
            <p>
              {userInfo.tel == null
                ? localStorage.getItem('tel')
                : userInfo.tel}
            </p>
          </div>
          <button>변경하기</button>
        </div>
        <div className='myinfo-pw flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>비밀번호</h3>
            <p>
              {userInfo.password == null
                ? localStorage.getItem('password')
                : userInfo.password}
            </p>
          </div>
          <button>변경하기</button>
        </div>
        <div className='myinfo-intro flex items-center justify-between'>
          <div className='flex flex-col justify-center gap-3'>
            <h3>자기소개</h3>
            <p>
              {userInfo.description == null
                ? localStorage.getItem('description')
                : userInfo.description}
            </p>
          </div>
          <button>변경하기</button>
        </div>

        <button className='exit-btn'>회원 탈퇴</button>
      </div>
    </div>
  );
};

export default MyInfo;

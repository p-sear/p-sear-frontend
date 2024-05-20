import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import authInstance from '../../axios/utils/authInstance';
import userinfoState from '../../recoils/userinfoState';
import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState('true');
  const setUserinfo = useSetRecoilState(userinfoState);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const apiUrl = 'http://localhost:5173/dummy/login.json';

    axios
      .post(apiUrl, {
        email,
        password,
      })
      .then(response => {
        authInstance.registerToken(setUserinfo, response.data.body.token);
        navigate('/');
      })
      .catch(() => {
        setLoginResult(false);
      });
  };

  return (
    <div className='login-container flex flex-col'>
      <div className='login-form flex flex-col'>
        <div className='email-box flex flex-col'>
          <h1>이메일</h1>
          <input
            type='email'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='pw-box flex flex-col'>
          <h1>비밀번호</h1>
          <input
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button className='login-btn' onClick={handleSubmit}>
        로그인
      </button>
      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;

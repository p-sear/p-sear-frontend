import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';
import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Failed to login', error);
    }
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

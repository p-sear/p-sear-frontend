import React from 'react'
import './Login.css';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div className="login-container flex flex-col">
            <div className='login-form flex flex-col'>
                <div className="email-box flex flex-col">
                    <h1>이메일</h1>
                    <input type="email" placeholder='이메일을 입력해주세요'/>
                </div>
                <div className="pw-box flex flex-col">
                    <h1>비밀번호</h1>
                    <input type="password" placeholder='비밀번호를 입력해주세요' />
                </div>
            </div>
            <button className='login-btn'>로그인</button>
            <div>
                <SocialLogin />
            </div>
        </div>
    )
}

export default Login
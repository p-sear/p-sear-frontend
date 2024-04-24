import React from 'react';
import "./SocialLogin.css";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="socialLogin-container">
            <div className='flex items-center justify-center gap-3'>
                <hr />
                <p style={{color: 'lightgray'}}>OR</p>
                <hr />
            </div>

            <div className="btn-box flex flex-col">
                <button className='kakao-login relative'>
                    <span className="absolute kakao-icon"><RiKakaoTalkFill /></span>
                    <p>카카오 로그인</p>
                </button>
                <button className='naver-login relative'>
                    <span className='absolute naver-icon'><SiNaver /></span>
                    <p>네이버 로그인</p>
                </button>
                <button className='google-login relative'>
                    <span className="absolute google-icon"><FcGoogle /></span>
                    <p>구글 로그인</p>
                </button>
            </div>
        </div>
    )
}

export default SocialLogin
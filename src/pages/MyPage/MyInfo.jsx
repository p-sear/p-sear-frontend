import React from 'react'
import './MyInfo.css';

const MyInfo = () => {
    return (
        <div className="myinfo-container flex flex-col">
            <h1>나의 정보</h1>

            <div className='myinfo-box flex flex-col justify-center'>
                <div className='myinfo-name flex justify-between items-center'>
                    <div className='flex flex-col justify-center gap-3'>
                        <h3>이름</h3>
                        <p>최혜빈</p>
                    </div>
                    <button>변경하기</button>
                </div>
                <div className="myinfo-email flex flex-col justify-center gap-3">
                    <h3>이메일</h3>
                    <p>gpqls3500@naver.com</p>
                </div>
                <div className="myinfo-tel flex justify-between items-center">
                    <div className='flex flex-col justify-center gap-3'>
                        <h3>휴대폰 번호</h3>
                        <p>010 - 0000 - 0000</p>
                    </div>
                    <button>변경하기</button>
                </div>
                <div className="myinfo-pw flex justify-between items-center">
                    <div className='flex flex-col justify-center gap-3'>
                        <h3>비밀번호</h3>
                        <p>*****************</p>
                    </div>
                    <button>변경하기</button>
                </div>
                <div className="myinfo-intro flex justify-between items-center">
                    <div className='flex flex-col justify-center gap-3'>
                        <h3>자기소개</h3>
                        <p>안녕하세요.</p>
                    </div>
                    <button>변경하기</button>
                </div>
            </div>
        </div>
    )
}

export default MyInfo
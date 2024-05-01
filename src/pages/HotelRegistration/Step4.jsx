import React from 'react'
import './Step4.css';

const Step4 = () => {
    return (
        <div className="step4-container flex flex-col justify-center items-center">
            <h1>본인 인증</h1>

            <div className='step4-box flex flex-col justify-center items-center'>
                <div className="step4-name flex flex-col justify-center items-center gap-3">
                    <h3>이름</h3>
                    <input type="text" />
                </div>
                <div className="step4-tel flex flex-col justify-center items-center gap-3">
                    <h3>연락처</h3>
                    <input type="tel" />
                </div>
                <div className="step4-email flex flex-col justify-center items-center gap-3">
                    <div className='w-full relative text-center'>
                        <h3>이메일</h3>
                        <button className='absolute right-0 top-0'>인증</button>
                    </div>
                    <input type="email" />
                </div>
            </div>
        </div>
    )
}

export default Step4
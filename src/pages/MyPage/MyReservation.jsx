import React from 'react'
import './MyReservation.css';
import hotelImg from '../../assets/images/hotel.png';

const MyReservation = () => {
    return (
        <div className="myreservation-container flex flex-col">
            <h1>예약 내역</h1>

            <div className="myreservation-box w-full">

                <div className='myreservation-item w-full flex justify-between items-center gap-20 h-full'>
                    <div className='flex items-center h-full'>
                        <img src={hotelImg} alt="" />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between'>
                                <p>숙소</p>
                                <p>히든 클리프 & 네이처</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>객실</p>
                                <p>스탠다드</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>체크인/체크아웃</p>
                                <p>2024.05.20 ~ 2024.05.22</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>결제 금액</p>
                                <p>120,000 원</p>
                            </div>
                        </div>
                    </div>

                    <button className='detail-btn'>상세 조회 &gt;</button>
                </div>

            </div>
        </div>
    )
}

export default MyReservation
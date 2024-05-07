import React from 'react'
import './MyReservation.css';
import hotelImg from '../../assets/images/hotel.png';

const MyReservation = () => {
    const reservations = [
        {
            id: 1,
            photo: hotelImg,
            name: '호텔 A',
            roomType: '스탠다드',
            checkIn: '2024.05.20',
            checkOut: '2024.05.22',
            price: '100,000',
        },
        {
            id: 2,
            photo: hotelImg,
            name: '호텔 B',
            roomType: '스위트',
            checkIn: '2024.05.20',
            checkOut: '2024.05.22',
            price: '100,000',
        },
        {
            id: 3,
            photo: hotelImg,
            name: '호텔 C',
            roomType: '스탠다드',
            checkIn: '2024.05.20',
            checkOut: '2024.05.22',
            price: '100,000',
        }
    ]

    return (
        <div className="myreservation-container flex flex-col">
            <h1>예약 내역</h1>

            <div className="myreservation-box w-full flex flex-col justify-center items-center">

                {reservations.map((reservation) => (
                <div className='myreservation-item w-full flex justify-between items-center gap-20 h-full'>
                    <div className='flex items-center h-full'>
                        <img src={hotelImg} alt="" />
                        <div className='flex flex-col justify-between h-full'>
                            <div className='flex justify-between'>
                                <p>숙소</p>
                                <p>{reservation.name}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>객실</p>
                                <p>{reservation.roomType}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>체크인/체크아웃</p>
                                <p>{reservation.checkIn} ~ {reservation.checkOut}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>결제 금액</p>
                                <p>{reservation.price} 원</p>
                            </div>
                        </div>
                    </div>

                    <div className='h-full flex flex-col'>
                        <button className='detail-btn'>상세 조회 &gt;</button>
                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}

export default MyReservation
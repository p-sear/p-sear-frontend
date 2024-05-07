import React from 'react'
import './MyReview.css';
import hotelImg from '../../assets/images/hotel.png';

const MyReview = () => {
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
        <div className="myreview-container flex flex-col">
            <h1>이용 후기</h1>

            <div className="myreview-box w-full flex flex-col justify-center items-center">
            {reservations.map((reservation) => (
                <div className='myreview-item w-full flex justify-between items-center gap-20'>
                    <div className='flex items-center h-full'>
                        <img src={hotelImg} alt="" />

                        <div className='flex items-center h-full'>
                            <div className='flex flex-col justify-between h-full'>
                                <p>숙소</p>
                                <p>객실</p>
                                <p>체크인/체크아웃</p>
                                <p>결제 금액</p>
                            </div>
                            <div className='flex flex-col justify-between font-bold h-full'>
                                <p>{reservation.name}</p>
                                <p>{reservation.roomType}</p>
                                <p>{reservation.checkIn} ~ {reservation.checkOut}</p>
                                <p>{reservation.price} 원</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <p>완료됨</p>
                        <button>이용 후기 작성하기</button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default MyReview
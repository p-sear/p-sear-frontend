import React from 'react'
import './MyBookmark.css';
import hotelImg from '../../assets/images/hotel.png';

const MyBookmark = () => {
    const reservations = [
        {
            id: 1,
            photo: hotelImg,
            name: '호텔 A',
            price: '150,000',
        },
        {
            id: 2,
            photo: hotelImg,
            name: '호텔 B',
            price: '90,000',
        },
        {
            id: 3,
            photo: hotelImg,
            name: '호텔 C',
            price: '88,000',
        }
    ]

    return (
        <div className="mybookmark-container flex flex-col">
            <h1>찜한 숙소</h1>

            <div className="mybookmark-box w-full flex flex-col justify-center items-center">

                {reservations.map((reservation) => (
                <div className='mybookmark-item w-full flex justify-between items-center gap-20'>
                    <div className='flex items-center h-full'>
                        <img src={hotelImg} alt="" />

                        <div className='flex items-center h-full'>
                            <div className='flex flex-col justify-evenly h-full'>
                                <p>숙소</p>
                                <p>숙박 가격</p>
                            </div>
                            <div className='flex flex-col justify-evenly font-bold h-full'>
                                <p>{reservation.name}</p>
                                <p>{reservation.price} 원</p>
                            </div>
                        </div>

                    </div>

                    <button className='mybook-reserve-btn'>예약하기 &gt;</button>
                </div>
                ))}

            </div>
        </div>
    )
}

export default MyBookmark;
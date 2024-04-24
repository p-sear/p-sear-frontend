import React from 'react'
import './TimeSpecials.css';
import { IoIosArrowForward } from "react-icons/io";
import hotelImg from '../../assets/images/hotel.png';
import { FaStar } from "react-icons/fa";

const TimeSpecials = () => {
    const hotels = [
        { 
          id: 1, 
          name: '호텔 A', 
          location: '서울', 
          rating: 5, 
          price: '150,000',
          special: '50,000',
          photo: hotelImg
        },
        { 
          id: 2, 
          name: '호텔 B', 
          location: '부산', 
          rating: 4.5, 
          price: '150,000',
          special: '50,000',
          photo: hotelImg
        },
        { 
          id: 3, 
          name: '호텔 B', 
          location: '부산', 
          rating: 4.5, 
          price: '150,000',
          special: '50,000',
          photo: hotelImg
        },
        { 
          id: 4, 
          name: '호텔 B', 
          location: '부산', 
          rating: 4.5, 
          price: '150,000',
          special: '50,000',
          photo: hotelImg
        }
    ];

    return (
        <div className="timespecials-container">
            <div className="timespecials-title flex justify-between items-center">
                <h1>타임 특가 숙소</h1>
                <a href='' className='flex justify-center items-center'>더보기 <span><IoIosArrowForward /></span></a>
            </div>
            
            <div className="timespecials-content">
            {hotels.map(hotel => (
                <div className='timespecials-box flex flex-col justify-center' key={hotel.id}>
                <img src={hotel.photo} alt="" className='hotel-img'/>
                <h3>{hotel.name}</h3>
                <p>{hotel.location}</p>
                <p className='relative'><span className='star-icon absolute'>⭐</span> {hotel.rating}</p>
                <b>타임 특가</b>
                <p><span>{hotel.price}</span> ➡️ <span>{hotel.special} 원</span></p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default TimeSpecials
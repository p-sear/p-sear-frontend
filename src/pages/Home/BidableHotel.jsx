import React from 'react'
import { useState, useEffect } from 'react';
import './BidableHotel.css';
import { IoIosArrowForward } from "react-icons/io";
import hotelImg from '../../assets/images/hotel.png';

const BidableHotel = () => {
    // const [hotels, setHotels] = useState([]);

    // const fetchHotels = async () => {
    //     try {
    //       const response = await fetch('api/rooms');
    //       if (!response.ok) {
    //         throw new Error('API 호출에 실패했습니다.');
    //       }
    //       const data = await response.json();
    //       return data.hotels;
    //     } catch (error) {
    //       console.error(error);
    //       return [];
    //     }
    // };

    const hotels = [
      { 
        id: 1, 
        name: '호텔 A', 
        location: '서울', 
        rating: 5, 
        highestBid: '100,000원', 
        instantBid: '150,000원', 
        photo: hotelImg
      },
      { 
        id: 2, 
        name: '호텔 B', 
        location: '부산', 
        rating: 4.5, 
        highestBid: '80,000원', 
        instantBid: '130,000원', 
        photo: hotelImg
      },
      { 
        id: 3, 
        name: '호텔 B', 
        location: '부산', 
        rating: 4.5, 
        highestBid: '80,000원', 
        instantBid: '130,000원', 
        photo: hotelImg
      },
      { 
        id: 4, 
        name: '호텔 B', 
        location: '부산', 
        rating: 4.5, 
        highestBid: '80,000원', 
        instantBid: '130,000원', 
        photo: hotelImg
      }
    ];

    return (
      <div className="bidableHotel-container">
          <div className="bidableHotel-title flex justify-between items-center">
              <h1>입찰 가능 숙소</h1>
              <a href='' className='flex justify-center items-center'>더보기 <span><IoIosArrowForward /></span></a>
          </div>

          {/* <div className="bidableHotel-content">
          {hotels.map(hotel => (
          <div key={hotel.id}>
              <img src={hotel.photo} alt={hotel.name} style={{ width: '100px', height: '100px' }} />
              <h2>{hotel.name}</h2>
              <p>위치: {hotel.location}</p>
              <p>별점: {hotel.rating}</p>
              <p>최고 입찰가: {hotel.highestBid}</p>
              <p>즉시 입찰가: {hotel.instantBid}</p>
          </div>
          ))}
          </div> */}

          <div className="bidableHotel-content flex justify-between items-center flex-wrap">
          {hotels.map(hotel => (
            <div className='bidableHotel-box flex flex-col justify-center' key={hotel.id}>
              <img src={hotel.photo} alt="" className='hotel-img'/>
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>⭐ {hotel.rating}</p>
              <p>최고 입잘가: {hotel.highestBid} 원</p>
              <p>즉시 입찰가: {hotel.instantBid} 원</p>
            </div>
          ))}
          </div>

      </div>
  )
}

export default BidableHotel
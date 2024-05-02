import React from 'react'
import './Step6.css';
import hotelFin from '../../assets/icons/hotel_fin.png';

const Step6 = () => {
    return (
        <div className="step6-container flex flex-col justify-center items-center">
            <h1>등록 완료</h1>
            <img src={hotelFin} alt="" />
        </div>
    )
}

export default Step6
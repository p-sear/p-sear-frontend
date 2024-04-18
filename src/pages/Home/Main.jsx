import React from 'react'
import Search from './Search';
import RecommendedLocation from './RecommendedLocation';
import BidableHotel from './BidableHotel';

const Main = () => {
    return (
        <div className='main-container'>
            <Search />

            <div style={{padding: 100}}>
                <RecommendedLocation />
                <BidableHotel />
            </div>
        </div>
    )
}

export default Main;
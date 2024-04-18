import React from 'react'
import Search from '../../components/Search/Search';
import RecommendedLocation from './RecommendedLocation';
import BidableHotel from './BidableHotel';
import TimeSpecials from './TimeSpecials';

const Main = () => {
    return (
        <div className='main-container'>
            <Search />

            <div style={{padding: 100}}>
                <RecommendedLocation />
                <BidableHotel />
                <TimeSpecials />
            </div>
        </div>
    )
}

export default Main;
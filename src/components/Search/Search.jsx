import React from 'react'
import './Search.css';
import { FiSearch } from "react-icons/fi";
import DateSelector from './DateSelector';
import PeopleSelector from './PeopleSelector';

const Search = () => {
    return (
        <>
            <div className="search-container w-full flex justify-center content-center">
                <div className="search-bar">
                    <FiSearch />
                    <input type="text" placeholder='여행지나 숙소를 검색해보세요'/>
                </div>

                <div className="comp-wrapper">
                    <DateSelector />
                </div>

                <div className="comp-wrapper">
                    <PeopleSelector />
                </div>

                <button className='search-btn'>검색</button>
            </div>
        </>
    )
}

export default Search
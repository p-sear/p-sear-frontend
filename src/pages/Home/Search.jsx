import React from 'react'
import './Search.css';
import { FiSearch } from "react-icons/fi";
import DateSelector from '../../components/Calendar/DateSelector';
import PeopleSelector from '../../components/PeopleSelector/PeopleSelector';

const Search = () => {
    return (
        <>
            <div className="search-container w-full flex justify-center content-center">
                <div className="search-bar">
                    <FiSearch />
                    <input type="text" placeholder='여행지나 숙소를 검색해보세요'/>
                </div>

                <DateSelector />

                <PeopleSelector />

                <button className='search-btn'>검색</button>
            </div>
        </>
    )
}

export default Search
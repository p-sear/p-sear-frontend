import { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import DateSelector from './DateSelector';
import PeopleSelector from './PeopleSelector';
import './Search.css';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(`/hotel-list?keyword=${keyword}&page=1`);
  };

  return (
    <>
      <div className='search-container flex w-full content-center justify-center'>
        <div className='search-bar'>
          <FiSearch />
          <input
            type='text'
            placeholder='여행지나 숙소를 검색해보세요'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </div>

        <div className='comp-wrapper'>
          <DateSelector />
        </div>

        <div className='comp-wrapper'>
          <PeopleSelector />
        </div>

        <button className='search-btn' onClick={onSearch}>
          검색
        </button>
      </div>
    </>
  );
};

export default Search;

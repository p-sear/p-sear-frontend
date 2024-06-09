import { useState } from 'react';

import addDays from 'date-fns/addDays';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import DateSelector from './DateSelector';
import PeopleSelector from './PeopleSelector';
import './Search.css';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);
  const [peopleCount, setPeopleCount] = useState(1);
  const navigate = useNavigate();

  const onSearch = () => {
    navigate(`/hotel-list?keyword=${keyword}&page=1`, {
      state: { dateRange, peopleCount },
    });
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
          <DateSelector onDateChange={setDateRange} initialRange={dateRange} />
        </div>

        <div className='comp-wrapper'>
          <PeopleSelector
            initialCount={peopleCount}
            onPeopleCountChange={setPeopleCount}
          />
        </div>

        <button className='search-btn' onClick={onSearch}>
          검색
        </button>
      </div>
    </>
  );
};

export default Search;

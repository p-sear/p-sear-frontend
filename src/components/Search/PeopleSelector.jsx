import { useEffect, useRef, useState } from 'react';

import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { TbUserFilled } from 'react-icons/tb';

import './PeopleSelector.css';

// eslint-disable-next-line react/prop-types
function PeopleSelector({ initialCount = 1, onPeopleCountChange }) {
  const [showSelector, setShowSelector] = useState(false);
  const [peopleCount, setPeopleCount] = useState(initialCount);
  const selectorRef = useRef(null);

  useEffect(() => {
    setPeopleCount(initialCount);
  }, [initialCount]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setShowSelector(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectorRef]);

  const handleCountChange = newCount => {
    setPeopleCount(newCount);
    if (onPeopleCountChange) {
      onPeopleCountChange(newCount);
    }
  };

  return (
    <div ref={selectorRef}>
      <button
        onClick={() => setShowSelector(!showSelector)}
        className='people-num flex'
      >
        <TbUserFilled />
        <span>인원: {peopleCount}명</span>
      </button>

      {showSelector && (
        <div className='peopleSelector-box absolute z-10 bg-white'>
          <div className='w-full'>
            <h3>인원 선택</h3>
            <p>유아 및 아동도 포함해주세요.</p>
          </div>

          <div>
            <button
              onClick={() => handleCountChange(peopleCount - 1)}
              disabled={peopleCount <= 1}
              className='minus-btn'
            >
              <FaMinusCircle />
            </button>
            <span>{peopleCount}</span>
            <button
              onClick={() => handleCountChange(peopleCount + 1)}
              className='plus-btn'
            >
              <FaPlusCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleSelector;

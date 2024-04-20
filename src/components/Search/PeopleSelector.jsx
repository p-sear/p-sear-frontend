import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TbUserFilled } from "react-icons/tb";
import './PeopleSelector.css';
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

function PeopleSelector() {
    const [showSelector, setShowSelector] = useState(false);
    const [peopleCount, setPeopleCount] = useState(1);
    const selectorRef = useRef(null);

    useEffect(() => {
        // 외부 클릭 감지 함수
        function handleClickOutside(event) {
          if (selectorRef.current && !selectorRef.current.contains(event.target)) {
            setShowSelector(false);
          }
        }
    
        // 이벤트 리스너 추가
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // 컴포넌트 제거 시 이벤트 리스너 제거
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectorRef]);

    return (
        <div ref={selectorRef}>
            <button onClick={() => setShowSelector(!showSelector)} className='people-num flex'>
                <TbUserFilled />
                <span>인원: {peopleCount}명</span>
            </button>
            
            {showSelector && (
            <div className='peopleSelector-box absolute bg-white z-10'>
                <div>
                    <h3>인원 선택</h3>
                    <p>유아 및 아동도 포함해주세요.</p>
                </div>

                <div>
                    <button onClick={() => setPeopleCount(peopleCount - 1)} disabled={peopleCount <= 1} className='minus-btn'><FaMinusCircle /></button>
                    <span>{peopleCount}</span>
                    <button onClick={() => setPeopleCount(peopleCount + 1)} className='plus-btn'><FaPlusCircle /></button>
                </div>
            </div>
            )}
        </div>
    );
}

export default PeopleSelector;
import React, { useState } from 'react';
import './MapModal.css';

const MapModal = () => {
    const hotelCategory = ['전체', '호텔', '모텔', '리조트', '펜션', '캠핑/글램핑', '게스트하우스', '한옥', '풀빌라', '단독 주택'];

    const [selected, setSelected] = useState([]);

    const handleSelect = (category) => {
        if (category === '전체') {
          if (selected.includes('전체') || selected.length === hotelCategory.length - 1) {
            setSelected([]);
          } else {
            setSelected([...hotelCategory]); // '전체'를 포함한 모든 카테고리를 선택
          }
        } else {
          setSelected((prevSelected) =>
            prevSelected.includes(category)
              ? prevSelected.filter((item) => item !== category)
              : [...prevSelected, category]
          );
        }
    };

    return (
        <div className="mapmodal-container">
            <div className="mapmodal-filter">
                <h1>필터</h1>
                <div className='mapmodal-filter-box'>
                    <div className='filter-category'>
                        <h3>숙소 유형</h3>
                        <ul>
                            {hotelCategory.map((category, index) => (
                            <li key={index} onClick={() => handleSelect(category)} className={selected.includes(category) ? 'selected' : ''}>
                                <div className="circle"></div>
                                <p>{category}</p>
                            </li>
                            ))}
                        </ul>
                    </div>

                    <div className="filter-price"></div>

                    <div className="filter-service">
                    </div>

                    <div className="filter-roomService">
                    </div>
                </div>
            </div>

            <div className="mapmodal-map">
                kakao map
            </div>
        </div>
    )
}

export default MapModal;
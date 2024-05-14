import { useState } from 'react';

import './RangeSlider.css';

const RangeSlider = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);

  const handleMinPriceChange = e => {
    const value = Math.min(Number(e.target.value), maxPrice - 10000);
    setMinPrice(value);
  };

  const handleMaxPriceChange = e => {
    const value = Math.max(Number(e.target.value), minPrice + 10000);
    setMaxPrice(value);
  };

  const handleMinPriceInputChange = e => {
    const value = Math.min(Number(e.target.value), maxPrice - 10000);
    setMinPrice(value);
  };

  const handleMaxPriceInputChange = e => {
    const value = Math.max(Number(e.target.value), minPrice + 10000);
    setMaxPrice(value);
  };

  return (
    <div className='slider-container'>
      <div className='slider-box w-full'>
        <div className='multi-range-slider w-full'>
          <input
            type='range'
            min='0'
            max='500000'
            value={minPrice}
            step='10000'
            onChange={handleMinPriceChange}
          />
          <input
            type='range'
            min='0'
            max='500000'
            value={maxPrice}
            step='10000'
            onChange={handleMaxPriceChange}
          />
          <div className='slider'>
            <div className='track'></div>
            <div
              className='range'
              style={{
                left: `${(minPrice / 500000) * 100}%`,
                right: `${100 - (maxPrice / 500000) * 100}%`,
              }}
            ></div>
            <div
              className='thumb left'
              style={{ left: `${(minPrice / 500000) * 100}%` }}
            ></div>
            <div
              className='thumb right'
              style={{ right: `${100 - (maxPrice / 500000) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className='flex w-full items-center justify-center gap-2'>
        <div className='flex w-full items-center justify-center gap-1'>
          {' '}
          <input
            type='text'
            value={minPrice}
            onChange={handleMinPriceInputChange}
            className='range-start-input w-full'
          />
          <p>원</p>
        </div>
        <p>~</p>
        <div className='flex w-full items-center justify-center gap-1'>
          {' '}
          <input
            type='text'
            value={maxPrice}
            onChange={handleMaxPriceInputChange}
            className='range-end-input w-full'
          />
          <p>원</p>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;

import { useRef, useState } from 'react';

import './RangeSlider.css';

const RangeSlider = () => {
  const [range, setRange] = useState({ start: 0, end: 500000 });
  const [dragging, setDragging] = useState(null);
  const sliderRef = useRef();

  const startDrag = (e, handle) => {
    e.preventDefault();
    setDragging(handle);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
  };

  const onDrag = e => {
    if (!dragging) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const newRange = { ...range };

    let newValue = ((e.clientX - rect.left) / rect.width) * 500000;

    newValue = Math.max(0, newValue);
    newValue = Math.min(500000, newValue);

    if (dragging === 'start') {
      newRange.start = Math.min(newValue, range.end);
    } else {
      newRange.end = Math.max(newValue, range.start);
    }

    setRange(newRange);
  };

  const stopDrag = () => {
    setDragging(null);
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
  };

  const handleSliderChange = e => {
    const { name, value } = e.target;
    setRange(prev => ({ ...prev, [name]: Number(value) }));
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setRange(prev => ({ ...prev, [name]: Number(value) }));
  };

  return (
    <div>
      <div className='slider-container' ref={sliderRef}>
        <div
          className='slider-range'
          style={{
            left: `${(range.start / 500000) * 100}%`,
            right: `${100 - (range.end / 500000) * 100}%`,
          }}
        ></div>
        <div
          className='slider-handle'
          style={{ left: `${(range.start / 500000) * 100}%` }}
          onMouseDown={e => startDrag(e, 'start')}
        ></div>
        <div
          className='slider-handle'
          style={{ left: `${(range.end / 500000) * 100}%` }}
          onMouseDown={e => startDrag(e, 'end')}
        ></div>
      </div>

      <div className='flex'>
        <input
          type='text'
          name='start'
          value={range.start}
          onChange={handleInputChange}
        />
        <p>~</p>
        <input
          type='text'
          name='end'
          value={range.end}
          onChange={handleInputChange}
        />
      </div>
      {/* <div>
        가격: {range.start}원 - {range.end}원
      </div> */}
    </div>
  );
};

export default RangeSlider;

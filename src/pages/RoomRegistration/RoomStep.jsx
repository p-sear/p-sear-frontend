import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import Room1 from './Room1';
import Room2 from './Room2';
import Room3 from './Room3';
import './RoomStep.css';

const progressArr = [1, 2, 3];

const RoomStep = () => {
  const [currentProgress, setCurrentProgress] = useState(
    parseInt(localStorage.getItem('currentProgress'), 10) || 1,
  );

  const navigate = useNavigate();
  const location = useLocation(); // 현재 위치 정보

  useEffect(() => {
    localStorage.setItem('currentProgress', currentProgress);
    window.scrollTo(0, 0);

    return () => {
      if (location.pathname !== '/hotel/new') {
        localStorage.removeItem('currentProcess');
      }
    };
  }, [currentProgress, navigate, location.pathname]);

  const updateProgress = newProgress => {
    setCurrentProgress(newProgress);
  };

  const goToHome = () => {
    localStorage.removeItem('currentProgress');
    navigate('/');
  };

  const stepComponents = {
    1: <Room1 />,
    2: <Room2 />,
    3: <Room3 />,
  };

  return (
    <div className='step-container'>
      <div className='steps relative'>
        {progressArr.map(step => (
          <span
            key={step}
            className={`step-circle ${currentProgress >= step ? 'active' : ''}`}
          >
            {step}
          </span>
        ))}
        <span
          className='progress-bar absolute'
          style={{ width: `${(currentProgress - 1) * 50}%` }}
        ></span>
      </div>

      {stepComponents[currentProgress]}

      <button
        id='next'
        onClick={() => {
          if (currentProgress === 6) {
            goToHome();
          } else {
            updateProgress(currentProgress + 1);
          }
        }}
        className='next-btn'
      >
        {currentProgress === 1
          ? '시작하기'
          : currentProgress === 2
            ? '등록하기'
            : currentProgress === 3
              ? '홈 화면으로 이동'
              : ''}
      </button>

      <div className='step-btns'>
        <button
          id='prev'
          disabled={currentProgress === 1}
          onClick={() => updateProgress(currentProgress - 1)}
        >
          이전
        </button>
        <button
          id='next'
          disabled={currentProgress === progressArr.length}
          onClick={() => updateProgress(currentProgress + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default RoomStep;

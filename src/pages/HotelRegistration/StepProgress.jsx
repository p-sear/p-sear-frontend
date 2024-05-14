import { useEffect, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import './StepProgress.css';

const progressArr = [1, 2, 3, 4, 5, 6]; // 1부터 시작하도록 수정

const StepProgress = () => {
  // 초기 상태 설정을 localStorage에서 가져온 값으로 설정하거나 없으면 1로 설정
  const [currentProgress, setCurrentProgress] = useState(
    parseInt(localStorage.getItem('currentProgress'), 10) || 1,
  );

  const navigate = useNavigate();
  const location = useLocation(); // 현재 위치 정보

  useEffect(() => {
    localStorage.setItem('currentProgress', currentProgress);
    window.scrollTo(0, 0);
    // if (currentProgress == 6) {
    //     // '홈 화면으로 이동' 버튼으로 메인 화면으로 이동 시, 로컬 스토리지 초기화
    //     // 초기화 로직은 여기가 아니라, 이동 버튼 클릭 핸들러에 추가 -> 여기에 추가하게 되면 '다음' 버튼을 누를 때마다 currentProgress + 1이 되는데 5에서 6으로 넘어가는 순간 바로 로컬 스토리지가 초기화되고 메인 화면으로 이동하게 됨
    // }

    return () => {
      if (location.pathname !== '/hotel/new') {
        localStorage.removeItem('currentProcess');
      }
    };
  }, [currentProgress, navigate, location.pathname]);

  // useEffect(() => {
  //     if (location.pathname !== 'localhost:5173/hotel/new') {
  //         localStorage.removeItem('currentProgress');
  //     }
  // }, [location]);

  const updateProgress = newProgress => {
    setCurrentProgress(newProgress);
  };

  const goToHome = () => {
    // 여기에 로컬 스토리지를 초기화하는 로직 추가
    localStorage.removeItem('currentProgress'); // 혹은 localStorage.setItem('currentProgress', 1);
    navigate('/');
  };

  const stepComponents = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Step5 />,
    6: <Step6 />,
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
          style={{ width: `${(currentProgress - 1) * 20}%` }}
        ></span>
      </div>

      {stepComponents[currentProgress]}

      <button
        id='next'
        onClick={() => {
          if (currentProgress === 6) {
            goToHome(); // 6단계에서 버튼 클릭 시 홈 화면으로 이동
          } else {
            updateProgress(currentProgress + 1); // 그 외 단계에서는 다음 단계로 진행
          }
        }}
        className='next-btn'
      >
        {currentProgress === 1
          ? '시작하기'
          : currentProgress === 5
            ? '등록 완료'
            : currentProgress === 6
              ? '홈 화면으로 이동'
              : '다음'}
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

export default StepProgress;

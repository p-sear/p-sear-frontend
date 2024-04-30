import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepProgress.css';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const progressArr = [1, 2, 3, 4, 5, 6]; // 1부터 시작하도록 수정

const StepProgress = () => {
    // 초기 상태 설정을 localStorage에서 가져온 값으로 설정하거나 없으면 1로 설정
    const [currentProgress, setCurrentProgress] = useState(
        parseInt(localStorage.getItem('currentProgress'), 10) || 1
    );

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('currentProgress', currentProgress);
        if (currentProgress == 6) {
            // '홈 화면으로 이동' 버튼으로 메인 화면으로 이동 시, 로컬 스토리지 초기화
            // 초기화 로직은 여기가 아니라, 이동 버튼 클릭 핸들러에 추가 -> 여기에 추가하게 되면 '다음' 버튼을 누를 때마다 currentProgress + 1이 되는데 5에서 6으로 넘어가는 순간 바로 로컬 스토리지가 초기화되고 메인 화면으로 이동하게 됨
        }
    }, [currentProgress, navigate]);

    const updateProgress = (newProgress) => {
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
        3: <Step3 />
    };

    return (
        <div className="step-container">
            <div className="steps relative">
                {
                    progressArr.map((step) => (
                        <span key={step} className={`step-circle ${currentProgress >= step ? 'active' : ''}`}>{step}</span> 
                    ))
                }
                <span className="progress-bar absolute" style={{width: `${(currentProgress - 1) * 20}%`}}></span>
            </div>

            {stepComponents[currentProgress]}

            <button
                id="next" 
                onClick={() => {
                    if (currentProgress === 6) {
                        goToHome();  // 6단계에서 버튼 클릭 시 홈 화면으로 이동
                    } else {
                        updateProgress(currentProgress + 1);  // 그 외 단계에서는 다음 단계로 진행
                    }
                }}
                className='next-btn'
            >
                {currentProgress === 1 ? '시작하기' : currentProgress === 5 ? '등록 완료' : currentProgress === 6 ? '홈 화면으로 이동' : '다음'}
            </button>
            

            <div className="step-btns">
                <button 
                    id="prev" 
                    disabled={currentProgress === 1} 
                    onClick={() => updateProgress(currentProgress - 1)}
                >
                    이전
                </button>
                <button 
                    id="next" 
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
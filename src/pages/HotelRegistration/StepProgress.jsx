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

    // currentProgress 상태가 변경될 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem('currentProgress', currentProgress);
        // 마지막 단계(7단계)에서 '홈 화면으로 이동' 버튼 클릭 시 홈 화면으로 이동
        if (currentProgress === 7) {
            navigate('/');
        }
    }, [currentProgress, navigate]);

    const updateProgress = (newProgress) => {
        setCurrentProgress(newProgress);
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
                disabled={currentProgress === progressArr.length} 
                onClick={() => updateProgress(currentProgress + 1)}
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
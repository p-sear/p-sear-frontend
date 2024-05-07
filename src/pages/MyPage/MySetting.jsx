import React from 'react';
import { useState } from 'react';
import './MySetting.css';
import { FaPlus, FaMinus } from "react-icons/fa6";

const MySetting = () => {
    const[isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(isOpen=>!isOpen);
    }

    const [allChecked, setAllChecked] = useState(false);
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const handleAllChecked = (event) => {
        const isChecked = event.target.checked;
        setAllChecked(isChecked);
        setCheckboxes({
        checkbox1: isChecked,
        checkbox2: isChecked,
        checkbox3: isChecked,
        });
    };

    const handleSingleCheck = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
        ...checkboxes,
        [name]: checked,
        });
    };

    return (
        <div className="mysetting-container flex flex-col">
            <h1>설정</h1>

            <div className="mysetting-box">
                <div className='flex justify-between items-center'>
                    <p className='flex justify-center items-center gap-3'>
                        <input type="checkbox" style={{scale: '1.5'}} checked={allChecked} onChange={handleAllChecked}/>
                        <span>알림 수신 동의(선택)</span>
                    </p>
                </div>
                <div className='mysetting-detail-terms'>
                    <p className='flex items-center gap-3'>
                        <p>⌞</p>
                        <input type="checkbox" style={{scale: '1.5'}} name="checkbox1" checked={checkboxes.checkbox1} onChange={handleSingleCheck}/>
                        <span>이메일</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <p>⌞</p>
                        <input type="checkbox" style={{scale: '1.5'}} name="checkbox2" checked={checkboxes.checkbox2} onChange={handleSingleCheck}/>
                        <span>문자</span>
                    </p>
                    <p className='flex items-center gap-3'>
                        <p>⌞</p>
                        <input type="checkbox" style={{scale: '1.5'}} name="checkbox3" checked={checkboxes.checkbox3} onChange={handleSingleCheck}/>
                        <span>카카오톡</span>
                    </p>
                </div>

                <button>저장</button>
            </div>
        </div>
    )
}

export default MySetting
import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './AccountForm.css';

const AccountForm = () => {
    const [view, setView] = useState('login');

    return (
        <div className='accountform-container'>
            <h1 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold'}}>
                {view === 'login' && '로그인'}
                {view === 'register' && '회원가입'}
            </h1>

             <div className='accountform'>
                <div className='account-tap flex'>
                    <button onClick={() => setView('login')} className={view === 'login' ? 'tab-selected-btn' : 'tap-btn'}>로그인</button>
                    <button onClick={() => setView('register')} className={view === 'register' ? 'tab-selected-btn' : 'tap-btn'}>회원가입</button>
                </div>

                {view === 'login' ? <Login /> : <Register />}
             </div>
        </div>
    )
}

export default AccountForm;
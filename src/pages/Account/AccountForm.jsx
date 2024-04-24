import React from 'react'
import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AccountForm = () => {
    const accountContainerStyle = {
        padding: '100px',
    }
    const accountStyle = {
        width: '500px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // gap: '10px'
    }
    const btnStyle = {
        color: 'lightgray'
    }
    const selectedBtnStyle = {
        // color: '#0080ff',
        fontWeight: 'bold',
        borderRadius: '10px 10px 0 0',
        padding: '5px 20px',
        border: '2px solid #87CDFF',
        borderBottom: 'none',
        backgroundColor: 'white'
    }

    const [view, setView] = useState('login');

    return (
        <div className='accountform-container' style={accountContainerStyle}>
             <div style={accountStyle}>
                 <h1 style={{textAlign:'center', fontSize:'25px', fontWeight:'bold'}}>
                    {view === 'login' && '로그인'}
                    {view === 'register' && '회원가입'}
                </h1>
                 
                <div className='flex gap-5' style={{marginTop: '50px'}}>
                    <button onClick={() => setView('login')} style={view === 'login' ? selectedBtnStyle : btnStyle}>로그인</button>
                    <button onClick={() => setView('register')} style={view === 'register' ? selectedBtnStyle : btnStyle}>회원가입</button>
                </div>

                {view === 'login' ? <Login /> : <Register />}
             </div>
        </div>
    )
}

export default AccountForm;
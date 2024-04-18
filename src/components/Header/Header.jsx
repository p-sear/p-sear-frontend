import React from 'react'
import logo from '../../assets/images/logo.png';
import userIcon from '../../assets/icons/user-icon.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className='flex content-center justify-between'>
                <a href="/"><img src={logo} alt="" className='logo'/></a>

                <div className='flex content-center justify-center cursor-pointer header-name'>
                    <span>최혜빈님</span>
                    <img src={userIcon} alt="" className='user-icon'/>
                </div>
            </header>
        </>
    );
};

export default Header;
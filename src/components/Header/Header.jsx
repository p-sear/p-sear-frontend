import React from 'react'
import logo from '../../assets/images/logo.png';
import { FaRegUserCircle } from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <>
            <header className='flex content-center justify-between'>
                <a href="/"><img src={logo} alt="" className='logo'/></a>

                <button className='flex items-center justify-center cursor-pointer header-name'>
                    <span>최혜빈님</span>
                    <FaRegUserCircle size="20"/>
                </button>
            </header>
        </>
    );
};

export default Header;
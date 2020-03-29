import React from 'react';
import './Logo.css';
import Logo from '../../assets/img/logo.png';

const logo = () => {
    
    return (
        <img src={Logo} alt='logo' className='logo_img'></img>
    )
};

export default logo;


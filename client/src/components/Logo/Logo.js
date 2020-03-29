import React from 'react';
import Styles from './Logo.module.css';
import Logo from '../../assets/img/logo.png';

export default props => {
    const { mode='default' } = props;
    return (
        <img src={Logo} alt='logo' className={Styles[mode]}></img>
    )
};


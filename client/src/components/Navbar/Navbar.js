import React from 'react';
import Styles from './Navbar.module.css';

export default props => {
    const { mode='default' } = props;
    return (
        <ul className={Styles[mode]}>
            <li className='links'>LINKS</li>
            <li>Home</li>
            <li>Find Brewery</li>
            <li>About This Project</li>
            <li>Contact MongoByte</li>
        </ul>
    )
};

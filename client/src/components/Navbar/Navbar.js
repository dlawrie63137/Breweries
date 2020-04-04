import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const navbar = (props) => {
    if(!props.showModal) {
        return (
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/find'>Find Brewery</Link></li>
                    <li><Link to='/about'>About MongoByte</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </nav>
        );
    };

        return (
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Find Brewery</li>
                    <li>About MongoByte</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        )
};

export default navbar;

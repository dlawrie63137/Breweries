import React from 'react';
import Drinks from '../../assets/img/people-having-a-drink-3641322.png';
import './Main_img.css';

const main_img = () => {
    return (
        <div className='main_img'>
            <img className = 'responsive-image__image'
                src={Drinks} 
                alt = 'people-having-a-drink'
                >
            </ img>
        </div>
    )
};

export default main_img;
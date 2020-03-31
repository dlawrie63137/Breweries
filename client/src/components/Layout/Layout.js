import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Heading from '../Heading/Heading';
import Image from '../Main_img/Main_img';
import Caption from '../Caption/Caption';
import Foot from '../Foot/Foot';
import './Layout.css';

const layout = () => (
    <Auxiliary>
        <div className='row'>
            <div className='col-6'>
                <Logo></Logo>
            </div>
            <div className='col-6'>
                <Navbar></Navbar>
            </div>
        </div>
            
        <div className='row'>
            <div className='col-12'>
                <Heading></Heading>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <Image></Image>
                <Caption></Caption>
            </div>
        </div>

        <div className='row foot'>
            <div className='col-12'>
                <Foot></Foot>
            </div>
        </div>
    </Auxiliary>
);

export default layout;
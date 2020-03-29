import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Heading from '../Heading/Heading';
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
            <div className='col-3'>

            </div>
        </div>
            
        <div className='row'>
            <div className='col-12'>
                <Heading></Heading>
            </div>
        </div>
    </Auxiliary>
);

export default layout;
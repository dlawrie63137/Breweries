import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Heading from '../Heading/Heading';

const layout = (props) => (
    <Auxiliary>
        <div >
            <Logo></Logo>
            <div>
                <Heading></Heading>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
        </div>
        <main>
            
        </main>
    </Auxiliary>
);

export default layout;
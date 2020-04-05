import React, { Component } from 'react';
import './Contact.css';
import Logo from '../../components/Logo/Logo';
import Navbar from '../../components/Navbar/Navbar';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
import Foot from '../../components/Foot/Foot';



class Contact extends Component {
    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <Logo></Logo>
                    </div>
                    <div className='col-9'>
                        <Navbar></Navbar>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 info'>
                        <ContactInfo></ContactInfo>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 info'>
                        <ContactForm></ContactForm>
                    </div>
                </div>

                <div className='foot-row'>
                    <div className='col-4'></div>
                    <div className='col-4 foot'>
                        <Foot></Foot>
                    <div className='col-4'></div>
                    </div>
                </div>
            </div>
        );
    };

};

export default Contact;
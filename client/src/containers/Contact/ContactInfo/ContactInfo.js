import React from 'react';
import { Link } from 'react-router-dom';
import './ContactInfo.css';


const contactInfo = () => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 email'>
                    <h5><u>Email:</u></h5><Link to='mailto:admin@mongobyte.com'><p>admin@mongobyte.com</p></Link>
                </div>

                <div className='col-6 mail'>
                        <h5 className='mailto'><u>Send mail to:</u></h5>
                        <h5 className='name'>MongoByte</h5> 
                        <h5 className='address1'>1218 Bliss Dr</h5>
                        <h5 className='address2'>St. Louis, MO 63137</h5>
                </div>
            </div>
        </div>
    );
};

export default contactInfo;
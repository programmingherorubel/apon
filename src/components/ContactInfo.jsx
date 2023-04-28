import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = () => {
    return (
        <div className='mt-5'>
            <p style={{fontSize:'14px'}}> H/O- 109/2 Bashabo </p>
            <p style={{fontSize:'14px'}}> Patwarygoli, Dhaka-1214.</p> 
            <p style={{fontSize:'14px'}}><Link style={{color:'gray',textDecoration:'none'}} to="tel:01681080820">Contact: +880 1681080820</Link></p>
            <p style={{fontSize:'14px'}}><Link style={{color:'gray',textDecoration:'none'}} to="mailto: apon3na@gmail.com">Email: apon3na@gmail.com</Link></p>

        </div>
    );
};

export default ContactInfo;
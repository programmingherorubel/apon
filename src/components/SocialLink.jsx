import React from 'react';
import { Link } from 'react-router-dom';

const SocialLink = () => {
    return (
        <ul className='mx-auto socialLink'>
                <li style={{listStyle:'none'}}><Link style={{color:'white',fontSize:'22px'}} target='_blank' to='https://www.facebook.com/rahel.aponn'><i className="fa-brands fa-facebook"></i></Link></li>
                <li style={{listStyle:'none'}}><Link style={{color:'white',fontSize:'22px'}} target='_blank' to='https://www.instagram.com/rahel_apon/'><i class="fa-brands fa-instagram"></i></Link></li>
                <li style={{listStyle:'none'}}><Link style={{color:'white',fontSize:'22px'}}  to="tel:01681080820"><i class="fa-brands fa-whatsapp"></i></Link></li>
        </ul>
    );
};

export default SocialLink;
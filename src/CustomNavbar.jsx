import React from 'react';
import logo from './assets/download.png';
import CariarObjecttive from './components/CariarObjecttive';
import Certification from './components/Certification';
import Language from './components/Language';
import SocialLink from './components/SocialLink';

const CustomNavbar = () => {
    return (
        <div >
                <div className='text-center'>
                <img src={logo} style={{width:'170px',height:'170px',borderRadius:'50%',border:'8px solid white',margin:'8px'}} alt="" />
                </div>
                <SocialLink />
                
                <CariarObjecttive/>
                <Language></Language>
                <Certification></Certification>
        </div>
    );
};

export default CustomNavbar;
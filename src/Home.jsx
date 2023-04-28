import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import logo from './assets/download.png';
import Animation from './components/Animation';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import KeySkill from './components/KeySkill';
import TecnicalSkill from './components/TecnicalSkill';
import SocialLink from './components/SocialLink';

const Home = () => {
    return (
    <Container fluid>
        <Row >
            <div className='navbar'>
                <CustomNavbar></CustomNavbar>
            </div>
            <Col className='content'>
                <Row>
                    <Col md={6} >
                        <div style={{display:'flex',gap:'10px',flexWrap:'warp',alignItems:'center'}}>
                            <div className='mobileLogo'>
                                <img src={logo} style={{width:'100px',height:'100px',borderRadius:'50%'}} alt="" />
                            </div>
                            <div>
                            
                                <h4 style={{fontFamily: 'Instrument Serif serif',fontSize:'30px',color:'yellow'}} className='mt-5'>Kazi Anowarul Islam</h4>
                                <Animation/>
                                <div className='mobileLogo'>
                                <SocialLink/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='contactinfo'>
                            <ContactInfo/>
                        </div>
                    </Col>
                </Row>
                <Experience/>
                <Education />
                <KeySkill />
                <TecnicalSkill />
                <Footer></Footer>
            </Col>
        </Row>
    </Container>
    );
};

export default Home;
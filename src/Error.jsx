import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Error = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}><h1 >Page Not Found <span style={{fontSize:'100px',color:'red'}}>404</span></h1></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Error;
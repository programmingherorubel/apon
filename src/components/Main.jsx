import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Home from '../Home';

const Main = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
    );
};

export default Main;
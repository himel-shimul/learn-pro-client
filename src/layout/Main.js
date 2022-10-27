import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/Leftside/LeftSide';

const Main = () => {
    return (
        <div>
            <Container>
            <Row>
                <Header></Header>
                <Col lg="3" className='d-none d-lg-block'>
                    <LeftSide></LeftSide>
                </Col>
                <Col lg="9">
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import logo from '../../../assets/Logo/logo.png';


const Footer = () => {
    return (
        <div className='bg-dark text-white p-5' style={{width: '100%', height: '60vh', marginTop:'50px'}}>
            <Row>
        <Col xs={6} md={4}>
          <ul>
            <h5>Section</h5>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>About</li>
          </ul>
        </Col>
        <Col xs={6} md={4}>
        <ul>
            <h5>Section</h5>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>FAQs</li>
            <li>About</li>
          </ul>
        </Col>
        <Col xs={6} md={4}>
            <h3>Subscribe to our newsletter</h3>
            <p>Monthly digest of what's new and exciting from us.</p>
            <img className='w-50' src={logo} alt="" />
        </Col>
      </Row>
      <p className='text-center pt-5'>© 2022 Company, Inc. All rights reserved.</p>
        </div>
    );
};

export default Footer;
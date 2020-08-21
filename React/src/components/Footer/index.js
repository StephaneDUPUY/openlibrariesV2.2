import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import './footer.scss';

const Footer = () => (
  <Container className="footer-container">
    <Row className="justify-content-md-center h-100">
      <Col lg={4} className="align-self-center link-pages">
        <a href="#">Mentions Légales</a>
        <a href="#">Contact</a>
      </Col>
      <Col lg={4} className="social-icon align-self-center">
        <Image className="social-icon-twitter" src="https://image.flaticon.com/icons/svg/733/733579.svg" />
        <Image className="social-icon-instagram" src="https://image.flaticon.com/icons/svg/1384/1384063.svg" />
        <Image className="social-icon-youtube" src="https://image.flaticon.com/icons/svg/1384/1384060.svg" />
        <Image className="social-icon-github" src="https://image.flaticon.com/icons/svg/2111/2111432.svg" />
      </Col>
    </Row>
  </Container>
);

export default Footer;

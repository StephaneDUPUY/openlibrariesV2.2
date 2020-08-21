import React from 'react';
import {
  Navbar,
  Container,
  Row,
  Col,
  Card,
  CardDeck,
} from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './learn-more.scss';

const LearnMore = () => (
  <>
    <Navbar>
      <Link to="/">
        <Navbar.Brand className="brand-title">Open-libraries</Navbar.Brand>
      </Link>
    </Navbar>
    <Container>
      <Row>
        <Col>
          <h2 className="text-center title-made-by">Un projet réalisé par</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card>
              <Card.Img variant="top" src="https://ca.slack-edge.com/TLUUGBFQD-UM8QYT6Q4-015feaacf56d-512" />
              <Card.Body>
                <Card.Title className="text-center">Mathilde</Card.Title>
                <Card.Text className="text-center">
                  Product Owner
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <IconContext.Provider value={{ color: '#0077B5', className: 'icon-social', size: '30px' }}>
                  <a href="https://www.linkedin.com/in/mathilde-renversade-developpeur-web-backend/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#24292E', className: 'icon-social', size: '30px' }}>
                  <a href="https://github.com/mathilderenversade" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://ca.slack-edge.com/TLUUGBFQD-UM98ZPBKP-c4d047433d73-512" />
              <Card.Body>
                <Card.Title className="text-center">Stéphane</Card.Title>
                <Card.Text className="text-center">
                  Lead dev back<br />
                  Git master
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <IconContext.Provider value={{ color: '#0077B5', className: 'icon-social', size: '30px' }}>
                  <a href="https://www.linkedin.com/in/stephanedupuy-web/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#24292E', className: 'icon-social', size: '30px' }}>
                  <a href="https://github.com/StephaneDUPUY" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://ca.slack-edge.com/TLUUGBFQD-UQTP9UPLM-04d22ee53aeb-512" />
              <Card.Body>
                <Card.Title className="text-center">Nicolas</Card.Title>
                <Card.Text className="text-center">
                  Scrum master<br />
                  Référent technique
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <IconContext.Provider value={{ color: '#0077B5', className: 'icon-social', size: '30px' }}>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#24292E', className: 'icon-social', size: '30px' }}>
                  <a href="https://github.com/nicoXXXXXtitan" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://ca.slack-edge.com/TLUUGBFQD-UMBDHU5FG-9abb65b3e537-512" />
              <Card.Body>
                <Card.Title className="text-center">Florian</Card.Title>
                <Card.Text className="text-center">
                  Lead dev front
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <IconContext.Provider value={{ color: '#0077B5', className: 'icon-social', size: '30px' }}>
                  <a href="https://www.linkedin.com/in/florian-thibaud/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: '#24292E', className: 'icon-social', size: '30px' }}>
                  <a href="https://github.com/flthibaud" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </IconContext.Provider>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  </>
);

export default LearnMore;

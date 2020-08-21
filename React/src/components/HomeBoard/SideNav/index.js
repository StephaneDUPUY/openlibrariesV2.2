import React from 'react';
import { Container, Row, Col, Navbar, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import './sidenav.scss';

const SideNav = () => (
  <Container>
    <Row>
      <Col>
        <div id="mySidenav" className="sidenav">
          <Navbar className="brand">
            <Navbar.Brand href="#home">
              Open-Libraries
            </Navbar.Brand>
          </Navbar>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item className="admin-link-item">
              <Link to="/board">
                <FontAwesomeIcon className="icon-link" icon={faHome} />
                Accueil
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="admin-link-item">
              <Link to="/board/users">
                <FontAwesomeIcon className="icon-link" icon={faUser} />
                Utilisateurs
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="admin-link-item">
              <Link to="/board/books">
                <FontAwesomeIcon className="icon-link" icon={faBook} />
                Livres
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Col>
    </Row>
  </Container>
);

export default SideNav;

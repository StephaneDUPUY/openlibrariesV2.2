import React from 'react';
import { Row, Col, Dropdown } from 'react-bootstrap';


import 'src/components/HomeUser/PageHome/NavMobile/navMobile.scss';

const NavMobile = () => {
  return (
    <Col xs={12} sm={12} className="navHidden d-md-none ">
      <Row>
        <Col xs={6} sm={6}>
          <h1>Open librarie</h1>
        </Col>
        <Col xs={6} sm={6} className="d-flex justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="light">
             Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Je veux prêter mon livre</Dropdown.Item>
              <Dropdown.Item href="">Mes emprunts</Dropdown.Item>
              <Dropdown.Item href="">Mes prêts</Dropdown.Item>
              <Dropdown.Item href="">Mon profil</Dropdown.Item>
              <Dropdown.Item href="">Déconnexion</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Col>
  );
};

export default NavMobile;

import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from 'react-bootstrap';

import './navBoard.scss';

const NavBoard = ({ logout, user }) => {
  const onClick = () => {
    window.localStorage.removeItem('token');
    logout();
  };
  return (
    <Navbar className="navbar-homeboard" variant="light" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
        <Nav>
          <Image className="profil-pic" src="https://i.imgur.com/Lx8QqMw.png" roundedCircle fluid />
          <NavDropdown title={user.firstname} id="basic-nav-dropdown" alignRight>
            <NavDropdown.Item className="btn-disconnect" onClick={onClick}>Se déconnecter</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBoard.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  firstname: PropTypes.string,
};

NavBoard.defaultProps = {
  firstname: '',
};

export default NavBoard;

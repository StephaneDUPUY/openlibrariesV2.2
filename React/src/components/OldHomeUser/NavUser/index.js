import React from 'react';
import { Nav, Navbar,NavDropdown, Button} from 'react-bootstrap';

import 'src/components/HomeUser/NavUser/navUser.scss';

const NavUser = () => {
  return (
    // expand is used to displayburger menu relating screen size
    <>
      <Navbar bg="light" expand="sm" fixed="top" >
        <Navbar.Brand href="#home">Open Libraries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <Button>Ajouter un livre à l'emprunt</Button>
          </Nav>
          <Nav>
            <NavDropdown title="Salut User connecté" id="basic-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Mes emprunts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Mes prêts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mon profil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Déconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavUser;

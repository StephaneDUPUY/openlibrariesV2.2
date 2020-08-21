import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Row, Col, Nav, NavDropdown, Image, } from 'react-bootstrap';

// import { FaUserCircle } from 'react-icons/fa';
// import { IconContext } from 'react-icons';

import ModalErrorSearchBook from 'src/containers/Modals/ModalErrorSearchBook';

import 'src/components/HomeUser/PageHome/Search/search.scss';

const Search = ({
  inputSearch,
  changeValueSearch,
  onSubmit,
  user,
  logout,
}) => {

  const handleChangeInput = (evt) => {
    const { value } = evt.target;
    changeValueSearch(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  const onClick = () => {
    window.localStorage.removeItem('token');
    logout();
  };



  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={2}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>Filtrer votre recherche</option>
              <option>Rechercher par auteur</option>
              <option>Rechercher par Titre</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg={5}>
          <Form.Group controlId="formSearch">
            <Form.Control
              type="search"
              placeholder="Quel livre recherchez vous ?"
              name="searchBook"
              value={inputSearch}
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>
        <Col lg={5} className="d-flex justify-content-end">
          <Nav className="blockUserProfil">
            <Image className="profil-img" src="https://i.imgur.com/Lx8QqMw.png" roundedCircle fluid />
            <NavDropdown title={`${user.firstname} ${user.lastname}`} className="basic-nav-dropdown" alignRight>
              <NavDropdown.Item 
                className="btn-disconnect"
                href=""
                onClick={onClick}
              >
                Se déconnecter
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Col>
      </Row>
      <ModalErrorSearchBook />
    </Form>
  );
};

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  changeValueSearch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
  }).isRequired,
  logout: PropTypes.func.isRequired,
};

export default Search;

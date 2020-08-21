import React from 'react';
import Form  from 'react-bootstrap/Form';
import { Button, Row,Col } from 'react-bootstrap';


import 'src/components/HomeUser/Main/Search/search.scss';

const Search = () => {
  return (
    <Form>
      <Row>
        <Col lg={12} className='form-title text-center'>Recherche d'un Livre</Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option>Filtrer votre recherche</option>
              <option>Rechercher par auteur</option>
              <option>Rechercher par Titre</option>
              <option>Recherche par titre</option>
              <option>Recherche par genre </option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg={9}>
          <Form.Group controlId="formSearch">           
            <Form.Control type="search" placeholder="Quelle livre recherchez vous ?" />
          </Form.Group>
        </Col>
      </Row>
      <Row >
        <Col lg={12} className="form-button text-center">
          <Button variant="outline-info" type="submit" >
            Rechercher
          </Button>
        </Col>
      </Row>
  </Form>
  );
};

export default Search;

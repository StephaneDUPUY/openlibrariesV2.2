import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

const FormUserInfo = ({ firstname, lastname, email, phoneNumber }) => (
  <Form>
    <Form.Group controlId="formBasicLastname">
      <Form.Label>Nom</Form.Label>
      <Form.Control type="text" placeholder="Nom" value={lastname} />
    </Form.Group>
    <Form.Group controlId="formBasicFirstName">
      <Form.Label>Prénom</Form.Label>
      <Form.Control type="text" placeholder="Prénom" value={firstname} />
    </Form.Group>
    <Form.Group controlId="formBasicAdress">
      <Form.Label>Adresse</Form.Label>
      <Form.Control type="text" placeholder="Adresse" />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="text" placeholder="Email" value={email} />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Téléphone</Form.Label>
      <Form.Control type="text" placeholder="Téléphone" value={phoneNumber} />
    </Form.Group>
    <Button variant="primary" type="submit">
      Mettre à jour
    </Button>
  </Form>
);

FormUserInfo.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
};

export default FormUserInfo;

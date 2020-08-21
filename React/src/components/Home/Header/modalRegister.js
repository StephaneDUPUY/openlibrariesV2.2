import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ModalRegister = () => (
  <Container>
    <Row>
      <Col>
        <Form id="login-form" style={{ display: 'block' }}>
          <Form.Group>
            <Form.Control type="text" name="company-name" className="company-name" placeholder="Nom de la structure" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" name="email" className="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="phone" className="phone" placeholder="Téléphone" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="adress" className="adress" placeholder="Adresse" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="type" className="type" placeholder="Type de la structure" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="code" className="code" placeholder="Code structure" />
          </Form.Group>
          <Form.Group>
            <Row className="justify-content-md-center">
              <Col className="text-center" sm={6}>
                <Button type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login">Register</Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default ModalRegister;

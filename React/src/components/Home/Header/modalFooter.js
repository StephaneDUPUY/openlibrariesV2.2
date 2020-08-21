import React from 'react';
import {
  Modal,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const ModalHeader = () => (
  <Modal.Footer>
    <Container>
      <Row className="justify-content-md-center">
        <Col className="text-center" lg={12}>
          <a href="#" className="forgot-password">Mot de passe oublié ?</a>
        </Col>
      </Row>
    </Container>
  </Modal.Footer>
);

export default ModalHeader;

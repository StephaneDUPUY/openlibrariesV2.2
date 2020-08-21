import React from 'react';
import { Modal, Button, Container, Row, Col, Form, InputGroup } from 'react-bootstrap';

const ModalAddBook = ({ show, onHide, handleClose }) => (
  <Modal className="modal-add-book" show={show} onHide={onHide}>
    <Modal.Header>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="panel panel-login">
              <div className="panel-heading">
                <Row>
                  <Col>
                    <a className="active" id="login-form-link">Ajouter un livre</a>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal.Header>
    <Modal.Body>
      <Container>
        <Row>
          <Col>
            <Form id="login-form" style={{ display: 'block' }}>
              <Form.Group>
                <Form.Control type="text" name="book-title" className="book-title" placeholder="Titre du livre" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="author-firstname" className="author-firstname" placeholder="Prénom de l'autheur" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="author-lastname" className="author-lastname" placeholder="Nom de l'autheur" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="type" className="type" placeholder="Genre" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" name="publication-date" className="publication-date" placeholder="Date de publication" />
              </Form.Group>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Description</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control as="textarea" className="book-desription" aria-label="book-desription" />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Row className="justify-content-md-center">
                  <Col className="text-center" sm={6}>
                    <Button type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login">Recherche</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalAddBook;

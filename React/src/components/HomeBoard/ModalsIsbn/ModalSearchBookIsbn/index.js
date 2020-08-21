import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';


const HomeBoardModalSearchBookIsbn = ({
  closedModalSearch,
  showModalSearch,
  onSubmit,
  onValueChange,
  inputIsbnValue,
}) => {
  const handleChangeInput = (evt) => {
    const { value } = evt.target;
    onValueChange(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const isbnIsValid = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
    if (inputIsbnValue.match(isbnIsValid)) {
      onSubmit();
    }
  };

  const closedModal = () => {
    closedModalSearch();
  };

  return (
    <Modal className="modal-add-book" show={showModalSearch} onHide={closedModal}>
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
              <Form id="login-form" style={{ display: 'block' }} onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="book-isbn"
                    className="book-isbn"
                    placeholder="Code ISBN du livre"
                    value={inputIsbnValue}
                    onChange={handleChangeInput}
                  />
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-md-center">
                    <Col className="text-center" sm={6}>
                      <Button type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login">Rechercher</Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

HomeBoardModalSearchBookIsbn.propTypes = {
  closedModalSearch: PropTypes.func.isRequired,
  showModalSearch: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  inputIsbnValue: PropTypes.string.isRequired,
};

export default HomeBoardModalSearchBookIsbn;

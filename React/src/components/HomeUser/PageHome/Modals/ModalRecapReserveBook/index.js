import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './modalRecapReserveBook.scss';

const ModalRecapReserveBook = ({
  showModalReserveBook,
  hideModal,
  closeModalValidateBooking,
  validateBooking,
  messageAfterBooking,
}) => {

  const onHide = () => {
    hideModal();
  };

  const onClickClosed = () => {
    hideModal();
  };

  const onClickValidate = () => {
    // closeModalValidateBooking();
    validateBooking();
  };
  return (
    <Modal className="modal-add-book" show={showModalReserveBook} onHide={onHide}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col>
                      <h1 className="active" id="login-form-link">Bravo pour cet excellent choix !</h1>
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
          <Modal.Footer>
            <Row>
              <Col lg={12} className="modalResponseIsbn-contain-text">
                <p className="modalResponseIsbn-text">En validant, vous avez réservé ce livre pour une période de 4 semaines, c'est à dire jusqu'au .....</p>
              </Col>
            </Row>
            {messageAfterBooking && <p className="modalResponseIsbn-message">{messageAfterBooking}</p>}
            {!messageAfterBooking && (
              <Row className="">
                <Col lg={12} className="modalResponseIsbn-buttons">
                  <Button
                    type="submit"
                    name="login-submit"
                    id="login-submit"
                    className="btn-validate"
                    onClick={onClickValidate}
                  >
                    Validez
                  </Button>
                  <Button
                    type="submit"
                    name="login-submit"
                    id="login-submit"
                    className="btn-validate"
                    onClick={onClickClosed}
                  >
                      Annulez
                  </Button>
                </Col>
              </Row>
            )}
          </Modal.Footer>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

ModalRecapReserveBook.propTypes = {
  hideModal: PropTypes.func.isRequired,
  closeModalValidateBooking: PropTypes.func.isRequired,
  validateBooking: PropTypes.func.isRequired,
  showModalReserveBook: PropTypes.bool.isRequired,
  messageAfterBooking: PropTypes.string.isRequired,
};


export default ModalRecapReserveBook;

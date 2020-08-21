import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './modalErrorSearchBook.scss';

const ModalErrorSearchBook = ({
  showModalErrorSearchBook,
  closedModal,
  displayMessageErrorSearchBook,
}) => {

  const onHide = () => {
    closedModal();
  };
  return (
    <Modal className="modal-add-book" show={showModalErrorSearchBook} onHide={onHide}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col lg={12}>
                      <p className="modalErrorSearchBook-text" id="login-form-link">{displayMessageErrorSearchBook}</p>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
    </Modal>
  );
};

ModalErrorSearchBook.propTypes = {
  showModalErrorSearchBook: PropTypes.bool.isRequired,
  closedModal: PropTypes.func.isRequired,
  displayMessageErrorSearchBook: PropTypes.string.isRequired,
};

export default ModalErrorSearchBook;

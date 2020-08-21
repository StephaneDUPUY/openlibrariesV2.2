import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import './ModalSuccessAddBookIsbn.scss';

const ModalSuccessAddBookIsbn = ({ showModalSuccessAddBook, closedModal }) => {

  const onHide = () => {
    closedModal();
  };
  return (
    <Modal className="modal-add-book" show={showModalSuccessAddBook} onHide={onHide}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col lg={12}>
                      <h1 className="modalSuccess-title">Bravo , Votre livre a bien été ajouté</h1>
                    </Col>
                    <Col lg={12}>
                      <p className="modalSuccess-text" id="login-form-link">Vous pouvez retirer ce livre à la location dans la partie "mes emprunts".</p>
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

ModalSuccessAddBookIsbn.propTypes = {
  showModalSuccessAddBook: PropTypes.bool.isRequired,
  closedModal: PropTypes.func.isRequired,
};


export default ModalSuccessAddBookIsbn;

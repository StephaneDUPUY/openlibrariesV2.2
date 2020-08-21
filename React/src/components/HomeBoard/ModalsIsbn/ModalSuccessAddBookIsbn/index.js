import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import './ModalSuccessAddBookIsbn.scss';

const HomeBoardModalSuccessAddBookIsbn = ({ showModalSuccessAddBook, closedModal }) => {

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
                    <Col>
                      <a className="active" id="login-form-link">Bravo , Votre livre a bien été ajouté</a>
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

HomeBoardModalSuccessAddBookIsbn.propTypes = {
  showModalSuccessAddBook: PropTypes.bool.isRequired,
  closedModal: PropTypes.func.isRequired,
};


export default HomeBoardModalSuccessAddBookIsbn;

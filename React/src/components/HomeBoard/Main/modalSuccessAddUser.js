import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const ModalSuccessAddUser = ({ showModalSuccessAddUser, closeModal }) => {

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal className="modal-add-book" show={showModalSuccessAddUser} onHide={handleClose}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col>
                      <h1 className="title_success-add-user">l'utilisateur a bien été ajouté</h1>
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

ModalSuccessAddUser.propTypes = {
  showModalSuccessAddUser: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalSuccessAddUser;

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './modalResponseBookIsbn.scss';

const HomeBoardModalResponseBookIsbn = ({
  showModalResponse,
  hideModal,
  authors,
  title,
  cover,
  closeModalResponse,
  addBookInBooking,
}) => {


  const onHide = () => {
    hideModal();
  };

  const onClickClosed = () => {
    closeModalResponse();
  };

  const onClickValidate = () => {
    closeModalResponse();
    addBookInBooking();
  };

  return (
    <Modal className="modal-add-book" show={showModalResponse} onHide={onHide}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col>
                      <a className="active" id="login-form-link">Votre livre a été trouvé</a>
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
            <Col lg={12}>
              <div className="modalResponseBookIsbn">
                <img className="ModalResponseBookIsbn-img" src={cover} alt="" />
                <h1 className="modalResponseIsbn-title">{title}</h1>
                <h2 className="modalResponseIsbn-author">Par {authors}</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Si vous voulez mettre ce livre à l'emprûnt pour une durée de 3 semaines, veuillez validez svp</p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col className="text-center" sm={6}>
              <Button
                type="submit"
                name="login-submit"
                id="login-submit"
                className="form-control btn btn-login"
                onClick={onClickValidate} 
              >
                Validez
              </Button>
              <Button 
                type="submit" 
                name="login-submit" 
                id="login-submit" 
                className="form-control btn btn-login mt-2"
                onClick={onClickClosed}
              >
                  Annulez
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

HomeBoardModalResponseBookIsbn.propTypes = {
  showModalResponse: PropTypes.bool.isRequired,
  closeModalResponse: PropTypes.func.isRequired,
  addBookInBooking: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  authors: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,

};

HomeBoardModalResponseBookIsbn.defaultProps = {
  authors: '',
  title: '',
  cover: '',
};
export default HomeBoardModalResponseBookIsbn;

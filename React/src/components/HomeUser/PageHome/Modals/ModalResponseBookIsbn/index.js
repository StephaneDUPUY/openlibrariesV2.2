import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import './modalResponseBookIsbn.scss';

const ModalResponseBookIsbn = ({
  showModalResponse,
  hideModal,
  authors,
  title,
  cover,
  closeModalResponse,
  addBookInBooking,
}) => {
  const coverCurrent = cover[0];
  let postedCover;

  if (coverCurrent) {
    postedCover = coverCurrent.image;
  }

  const onHide = () => {
    hideModal();
  };

  const onClickClosed = () => {
    hideModal();
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
                      <a className="active" id="login-form-link">Votre livre a bien été trouvé</a>
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
            <Col lg={12} className="mb-2">
              <div className="modalResponseBookIsbn ">
                <Row>
                  <Col lg={12} className="d-flex justify-content-center">
                    <img className="ModalResponseBookIsbn-img" src={postedCover} alt="" />
                  </Col>
                </Row>
                <Row>
                  <Col lg={12} className="pt-1">
                    <h1 className="modalResponseIsbn-title">{title}</h1>
                    <h2 className="modalResponseIsbn-author">Par {authors[0]}</h2>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Modal.Footer>
            <Row>
              <Col lg={12} className="modalResponseIsbn-contain-text">
                <p className="modalResponseIsbn-text">En validant, vous vous engagez à mettre ce livre à disposition des autres utilisateurs qui pourront donc vous l’emprunter pendant une période de 1 mois</p>
              </Col>
            </Row>
            <Row className="">
              <Col lg={12} className="modalResponseIsbn-buttons" >
                <Button
                  type="submit"
                  name="login-submit"
                  id="login-submit"
                  className="btn-validate"
                  onClick={onClickValidate}
                >
                  Valider
                </Button>
                <Button
                  type="submit"
                  name="login-submit"
                  id="login-submit"
                  className="btn-validate"
                  onClick={onClickClosed}
                >
                    Annuler
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

ModalResponseBookIsbn.propTypes = {
  showModalResponse: PropTypes.bool.isRequired,
  closeModalResponse: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  addBookInBooking: PropTypes.func.isRequired,
  authors: PropTypes.array,
  title: PropTypes.string,
  cover: PropTypes.object.isRequired,

};

ModalResponseBookIsbn.defaultProps = {
  authors: [],
  title: '',

};
export default ModalResponseBookIsbn;

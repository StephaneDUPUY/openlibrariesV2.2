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

const ModalAddUser = ({
  showModalAddUser,
  closeModal,
  onSubmit,
  onValueChange,
  onKeyPress,
  inputFirstnameValue,
  inputLastnameValue,
  inputPasswordValue,
  inputAddressValue,
  inputPhoneValue,
  inputEmailValue,
  changeAddressFromAPI,
  addressesAPI,
  showInputApi,
  clearInput,
}) => {
  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;
    onValueChange(name, value);
  };

  const handleKeyDown = () => {
    onKeyPress();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  const clickAddressAPI = (evt) => {
    changeAddressFromAPI(evt.target.value);
  };

  const inputClear = () => {
    clearInput();
  };

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal className="modal-add-book" show={showModalAddUser} onHide={handleClose}>
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col>
                      <a id="login-form-link">Ajouter un utilisateur</a>
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
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstname"
                    className="book-title"
                    placeholder="Prénom de l'utilisateur"
                    value={inputFirstnameValue}
                    onChange={handleChangeInput}
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastname"
                    className="author-firstname"
                    placeholder="Nom de l'utilisateur"
                    value={inputLastnameValue}
                    onChange={handleChangeInput}
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="publication-date"
                    placeholder="Adresse email de l'utilisateur"
                    value={inputEmailValue}
                    onChange={handleChangeInput}
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    className="publication-date"
                    placeholder="Mot de passe de l'utilisateur"
                    value={inputPasswordValue}
                    onChange={handleChangeInput}
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    className="type"
                    placeholder="N° de téléphone de l'utilisateur"
                    value={inputPhoneValue}
                    onChange={handleChangeInput}
                    autoComplete="on"
                  />
                </Form.Group>
                <Form.Group>

                  <Form.Label>Adresse</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    className="author-lastname"
                    placeholder="Commencer à taper votre adresse"
                    autoComplete="off"
                    value={inputAddressValue}
                    onChange={handleChangeInput}
                    onKeyUp={handleKeyDown}
                    onClick={inputClear}
                  />

                  {addressesAPI
                    && addressesAPI.map((address) => (
                      <Form.Control
                        type="text"
                        name="address"
                        className="address-api"
                        readOnly 
                        value={address.properties.label}
                        key={address.properties.x}
                        onClick={clickAddressAPI}
                        style={{ display: showInputApi }}
                      />
                    ))}
                </Form.Group>
                <Form.Group>
                  <Row className="justify-content-md-center">
                    <Col className="text-center" sm={6}>
                      <Button type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login">Ajouter l'utilisateur</Button>
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

ModalAddUser.propTypes = {
  showModalAddUser: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  inputFirstnameValue: PropTypes.string.isRequired,
  inputLastnameValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  inputAddressValue: PropTypes.string.isRequired,
  inputPhoneValue: PropTypes.string.isRequired,
  inputEmailValue: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  showInputApi: PropTypes.string.isRequired,
  addressesAPI: PropTypes.array.isRequired,
  changeAddressFromAPI: PropTypes.func.isRequired,
};

export default ModalAddUser;

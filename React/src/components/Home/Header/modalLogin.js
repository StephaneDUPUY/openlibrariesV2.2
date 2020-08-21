import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

// props received come from redux (folder : store/reducer/formLogin.js )
const ModalLogin = ({
  inputEmailValue,
  inputPasswordValue,
  onValueChange,
  onSubmit,
  loginFailureMessage,
}) => {
  const handleChangeInput = (evt) => {
    // retrieve name to dynamically change state of reducer relating field (folder : reducer/formLogin)
    const { name, value } = evt.target;
    onValueChange(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form id="login-form" style={{ display: 'block' }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                className="email"
                type="email"
                name="email"
                placeholder="Email"
                // value is in Redux state
                value={inputEmailValue}
                onChange={handleChangeInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                className="password"
                type="password"
                name="password"
                placeholder="Password"
                // value is in Redux state
                value={inputPasswordValue}
                onChange={handleChangeInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check type="checkbox" label="Remember Me" name="remember" className="remember" />
            </Form.Group>
            <Form.Group>
              <Row className="justify-content-md-start">
                <Col className="mb-4 " sm={6}>
                  <p className="message-error-text">{loginFailureMessage}</p>
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col className="text-center" sm={6}>
                  <Button type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login">Log in</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

ModalLogin.propTypes = {
  inputEmailValue: PropTypes.string.isRequired,
  inputPasswordValue: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loginFailureMessage: PropTypes.string.isRequired,
};

export default ModalLogin;

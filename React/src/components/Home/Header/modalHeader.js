import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Container,
  Row,
  Col,
} from 'react-bootstrap';

class ModalHeader extends React.Component {
  state = {
    activeSection: '',
  }

  componentDidMount() {
    this.setState({
      activeSection: 'login-active',
    });
  }

  login = () => {
    this.setState({
      activeSection: 'login-active',
    });
  }

  register = () => {
    this.setState({
      activeSection: 'register-active',
    });
  }

  render() {
    const { onChangeView } = this.props;
    const { activeSection } = this.state;
    return (
      <Modal.Header>
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <div className="panel panel-login">
                <div className="panel-heading">
                  <Row>
                    <Col xs={6}>
                      <a
                        onClick={() => {
                          onChangeView('login'); this.login();
                        }}
                        className={activeSection === 'login-active' ? 'active' : ''}
                        id="login-form-link"
                      >
                        Login
                      </a>
                    </Col>
                    <Col xs={6}>
                      <a
                        onClick={() => {
                          onChangeView('register'); this.register();
                        }}
                        className={activeSection === 'register-active' ? 'active' : ''}
                        id="login-form-link"
                      >
                        Register
                      </a>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
    );
  }
}

ModalHeader.propTypes = {
  onChangeView: PropTypes.func.isRequired,
};

export default ModalHeader;

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

import './login-modal.scss';
import ModalHeader from './modalHeader';
import ModalLogin from 'src/containers/Forms/FormLogin';
import ModalRegister from './modalRegister';
import ModalFooter from './modalFooter';

class LoginModal extends React.Component {
  state = {}

  render() {
    const {
      show,
      onHide,
      view,
      onChangeView,
    } = this.props;
    return (
      <Modal show={show} onHide={onHide}>
        <ModalHeader onChangeView={onChangeView} />
        <Modal.Body>
          {view === 'login' && (
            <ModalLogin />
          )}
          {view !== 'login' && (
            <ModalRegister />
          )}
        </Modal.Body>
        {view === 'login' && (
          <ModalFooter />
        )}
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired,
};

export default LoginModal;

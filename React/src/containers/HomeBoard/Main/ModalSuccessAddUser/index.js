import { connect } from 'react-redux';

import ModalSuccessAddUser from 'src/components/HomeBoard/Main/modalSuccessAddUser';

import {
  closeModalSuccessUser,
 } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showModalSuccessAddUser: state.formAddUser.showModalSuccessAddUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(closeModalSuccessUser());
  },
});

const ModalSuccessAddUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalSuccessAddUser);

export default ModalSuccessAddUserContainer;

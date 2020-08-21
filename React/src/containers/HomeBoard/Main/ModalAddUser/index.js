import { connect } from 'react-redux';

import formAddUser from 'src/components/HomeBoard/Main/modalAddUser';

import {
  changeInputAddUser,
  submitFormAddUser,
  onKeyPress,
  searchAPIaddress,
  changeAddressFromToAPI,
  clearInputAddress,
  closeModalAddUser,
 } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputFirstnameValue: state.formAddUser.firstname,
    inputLastnameValue: state.formAddUser.lastname,
    inputPasswordValue: state.formAddUser.password,
    inputAddressValue: state.formAddUser.address,
    inputPhoneValue: state.formAddUser.phone,
    inputEmailValue: state.formAddUser.email,
    addressesAPI: state.formAddUser.addressesAPI,
    showInputApi: state.formAddUser.showInputApi,
    cities: state.formAddUser.cities,
    showModalAddUser: state.formAddUser.showModalAddUser,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (name, value) => {
    const action = changeInputAddUser(name, value);
    dispatch(action);
  },
  onSubmit: () => {
    const action = submitFormAddUser();
    dispatch(action);
  },
  onKeyPress: () => {
    const action = onKeyPress();
    dispatch(action);
  },
  changeAddressFromAPI: (newValueAddress) => {
    dispatch(changeAddressFromToAPI(newValueAddress));
  },
  clearInput: () => {
    dispatch(clearInputAddress());
  },
  closeModal: () => {
    dispatch(closeModalAddUser());
  },
});

const FormAddUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(formAddUser);

export default FormAddUserContainer;

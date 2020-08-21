import { connect } from 'react-redux';

import ModalLogin from 'src/components/Home/Header/modalLogin';

import { changeInput, submitFormLogin } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    inputEmailValue: state.formLogin.email,
    inputPasswordValue: state.formLogin.password,
    loginFailureMessage: state.formLogin.loginFailureMessage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onValueChange: (name, value) => {
    const action = changeInput(name, value);
    dispatch(action);
  },
  onSubmit: () => {
    const action = submitFormLogin();
    dispatch(action);
  },
});

const FormLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLogin);

export default FormLoginContainer;

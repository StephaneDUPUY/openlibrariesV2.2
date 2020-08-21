import { connect } from 'react-redux';

import FormUserInfo from 'src/components/HomeUser/PageProfile/formUserInfo';
// import { getIdBookLend, sendIdBookLend } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    firstname: state.user.user.firstname,
    lastname: state.user.user.lastname,
    email: state.user.user.email,
    phoneNumber: state.user.user.phoneNumber,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

const FormUserInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormUserInfo);

export default FormUserInfoContainer;

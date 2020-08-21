import { connect } from 'react-redux';

import App from 'src/components/App';

import { getAllDatas } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {

  return {
    isLogged: state.user.isLogged,
    typeUser: state.user.typeUser,
    loading: state.user.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loggedUser: () => {
    dispatch(getAllDatas());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;

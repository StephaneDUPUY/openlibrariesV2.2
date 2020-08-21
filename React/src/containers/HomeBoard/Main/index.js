import { connect } from 'react-redux';

import Main from 'src/components/HomeBoard/Main';
import { openModalSearchIsbn, showModalAddNewUser } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    // usersBoard: state.user.usersBoard,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModalSearchIsbn: () => {
    dispatch(openModalSearchIsbn());
  },
  showModalAddUser: () => {
    dispatch(showModalAddNewUser());
  },
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;

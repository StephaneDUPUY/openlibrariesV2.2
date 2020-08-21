import { connect } from 'react-redux';

import NavBoard from 'src/components/HomeBoard/NavBoard';

import { logoutUser } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => {
    dispatch(logoutUser());
  },
});

const NavBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBoard);

export default NavBoardContainer;

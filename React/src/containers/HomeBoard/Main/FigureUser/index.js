import { connect } from 'react-redux';

import FigureUser from 'src/components/HomeBoard/Main/FigureUser';
import { openModalSearchIsbn } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    usersBoard: state.user.usersBoard,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModalSearchIsbn: () => {
    dispatch(openModalSearchIsbn());
  },
});

const FigureUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FigureUser);

export default FigureUserContainer;

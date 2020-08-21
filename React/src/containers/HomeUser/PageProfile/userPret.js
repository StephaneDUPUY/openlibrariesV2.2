import { connect } from 'react-redux';

import userPret from 'src/components/HomeUser/PageProfile/userPret';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    bookILend: state.book.bookILend,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const userPretContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(userPret);

export default userPretContainer;

import { connect } from 'react-redux';

import bookPret from 'src/components/HomeUser/PageProfile/bookPret';
import { getIdBookLend, sendIdBookLend } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    bookILend: state.book.bookILend,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    dispatch(getIdBookLend(id));
    dispatch(sendIdBookLend());
  },
});

const bookPretContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(bookPret);

export default bookPretContainer;

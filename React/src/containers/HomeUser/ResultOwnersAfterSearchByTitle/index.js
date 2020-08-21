import { connect } from 'react-redux';

import ResultOwnersAfterSearchByTitle from 'src/components/HomeUser/PageHome/ResultOwnersAfterSearchByTitle';
import { setBooking, openValidateModal } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showResultOwnersAfterSearchByTitle: state.book.showResultOwnersAfterSearchByTitle,
    bookResultSearch: state.book.bookSearch,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModalValidate: (idOwner, bookId) => {
    dispatch(setBooking(idOwner, bookId));
    dispatch(openValidateModal());
  },
});

const ResultOwnersAfterSearchByTitleContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultOwnersAfterSearchByTitle);

export default ResultOwnersAfterSearchByTitleContainer;

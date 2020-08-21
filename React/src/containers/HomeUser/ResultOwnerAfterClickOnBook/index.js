import { connect } from 'react-redux';

import ResultOwnerAfterClickOnBook from 'src/components/HomeUser/PageHome/ResultOwnerAfterClickOnBook';
import { setBooking, 
  // openValidateModal, 
  // closeResultOwnerBooks 
} from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showResultOwnerAfterClickOnBook: state.book.showResultOwnerAfterClickOnBook,
    bookResultSearch: state.book.bookSearch,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModalValidate: (idOwner, bookId) => {
    dispatch(setBooking(idOwner, bookId));
    // dispatch(openValidateModal());
    // dispatch(closeResultOwnerBooks());
  },
});

const ResultOwnerAfterClickOnBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultOwnerAfterClickOnBook);

export default ResultOwnerAfterClickOnBookContainer;

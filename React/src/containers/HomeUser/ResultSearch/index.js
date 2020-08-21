import { connect } from 'react-redux';

import ResultSearchBook from 'src/components/HomeUser/PageHome/ResultSearchBook';
import { closeResultSearchBook } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showResultBook: state.book.showResultBook,
    bookSearch: state.book.bookSearch,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeOneBook: () => {
    dispatch(closeResultSearchBook());
  },
});

const ResultSearchBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultSearchBook);

export default ResultSearchBookContainer;

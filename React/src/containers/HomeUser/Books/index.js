import { connect } from 'react-redux';

import Books from 'src/components/HomeUser/PageHome/Books';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    latestBooks: state.book.latestBooks,
    showBigBook: state.book.showBigBook,
    showOneBook: state.book.showOneBook,
    showResultBook: state.book.showResultBook,
  };
};

const mapDispatchToProps = (dispatch) => ({

});

const BooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Books);

export default BooksContainer;

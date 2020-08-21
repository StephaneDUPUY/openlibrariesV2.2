import { connect } from 'react-redux';

import BooksPage from 'src/components/HomeBoard/BooksPage';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    allBooks: state.book.allBooks,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const BooksPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BooksPage);

export default BooksPageContainer;

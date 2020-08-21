import { connect } from 'react-redux';

import Book from 'src/components/HomeUser/PageHome/Book';

import { showOneBook, openResultOwnerAfterClickOnBook } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({
  showBook: (currentBook) => {
    dispatch(showOneBook(currentBook));
  },
  openResultOwnerAfterClickInBook: () => {
    dispatch(openResultOwnerAfterClickOnBook());
  },
});

const BookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Book);

export default BookContainer;

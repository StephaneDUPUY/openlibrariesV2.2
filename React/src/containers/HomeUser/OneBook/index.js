import { connect } from 'react-redux';

import OneBook from 'src/components/HomeUser/PageHome/OneBook';

import { closeDisplayOneBook } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showOneBook: state.book.showOneBook,
    currentBook: state.book.currentBook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeOneBook: () => {
    dispatch(closeDisplayOneBook());
  },
});

const OneBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OneBook);

export default OneBookContainer;

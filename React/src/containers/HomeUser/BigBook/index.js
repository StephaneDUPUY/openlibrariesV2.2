import { connect } from 'react-redux';

import BigBook from 'src/components/HomeUser/PageHome/BigBook';
import { showOneBook } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showBigBook: state.book.showBigBook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  showBook: (currentBook) => {
    dispatch(showOneBook(currentBook));
  },
});

const BigBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BigBook);

export default BigBookContainer;

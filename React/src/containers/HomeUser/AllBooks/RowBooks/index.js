import { connect } from 'react-redux';

import RowBooks from 'src/components/HomeUser/PageHome/AllBooks/RowBooks';

// import { changeInput, submitFormLogin } from 'src/store/actions';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    books: state.book.listBooksByCategory,
  };
};

const mapDispatchToProps = (dispatch) => ({
  showOneBook: (id) => {
    // dispatch(showOneBook(id))
  },
});

const RowBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RowBooks);

export default RowBookContainer;

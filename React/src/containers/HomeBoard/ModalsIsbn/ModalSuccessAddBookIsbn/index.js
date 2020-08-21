import { connect } from 'react-redux';

import HomeBoardModalSuccessAddBookIsbn from 'src/components/HomeBoard/ModalsIsbn/ModalSuccessAddBookIsbn';

import { hideModalResponseBook, closeModalSuccessAddBookIsbn } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    // hideModalResponse: state.isbnForm.hideModalResponse,
    showModalSuccessAddBook: state.isbnForm.showModalSuccessAddBook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => {
    dispatch(hideModalResponseBook());
  },
  closedModal: () => {
    dispatch(closeModalSuccessAddBookIsbn());
  },
});

const HomeBoardModalValidateAddBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeBoardModalSuccessAddBookIsbn);

export default HomeBoardModalValidateAddBookContainer;

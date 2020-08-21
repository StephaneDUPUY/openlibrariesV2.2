import { connect } from 'react-redux';

import ModalSuccessAddBookIsbn from 'src/components/HomeUser/PageHome/Modals/ModalSuccessAddBookIsbn';

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

const ModalValidateAddBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalSuccessAddBookIsbn);

export default ModalValidateAddBookContainer;

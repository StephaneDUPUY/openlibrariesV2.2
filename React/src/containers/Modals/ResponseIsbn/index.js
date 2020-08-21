import { connect } from 'react-redux';

import ModalResponseBookIsbn from 'src/components/HomeUser/PageHome/Modals/ModalResponseBookIsbn';

import { hideModalResponseBook, closeResponseModal, addTheBookInBooking } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showModalResponse: state.isbnForm.showModalResponse,
    title: state.isbnForm.responseBookIsbn.title,
    authors: state.isbnForm.responseBookIsbn.authors,
    cover: state.isbnForm.responseBookIsbn,
    messageErrorIsbn: state.isbnForm.messageErrorIsbn,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => {
    dispatch(hideModalResponseBook());
  },
  closeModalResponse: () => {
    dispatch(closeResponseModal());
  },
  addBookInBooking: () => {
    dispatch(addTheBookInBooking());
  },
});

const ModalResponseBookIsbnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalResponseBookIsbn);

export default ModalResponseBookIsbnContainer;

import { connect } from 'react-redux';

import HomeBoardModalResponseBookIsbn from 'src/components/HomeBoard/ModalsIsbn/ModalResponseBookIsbn';

import { hideModalResponseBook, closeResponseModal, addTheBookInBooking } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showModalResponse: state.isbnForm.showModalResponse,
    title: state.isbnForm.responseBookIsbn.title,
    authors: state.isbnForm.responseBookIsbn.authors,
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

const HomeBoardModalResponseBookIsbnContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeBoardModalResponseBookIsbn);

export default HomeBoardModalResponseBookIsbnContainer;

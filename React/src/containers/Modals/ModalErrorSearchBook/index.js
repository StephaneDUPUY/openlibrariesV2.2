import { connect } from 'react-redux';

import ModalErrorSearchBook from 'src/components/HomeUser/PageHome/Modals/ModalErrorSearchBook';

import { closeModalErrorSearchBook } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    // hideModalResponse: state.isbnForm.hideModalResponse,
    displayMessageErrorSearchBook: state.searchBook.displayMessageErrorSearchBook,
    showModalErrorSearchBook: state.searchBook.showModalErrorSearchBook,
  };
};

const mapDispatchToProps = (dispatch) => ({
  closedModal: () => {
    dispatch(closeModalErrorSearchBook());
  },
});

const ModalErrorSearchBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalErrorSearchBook);

export default ModalErrorSearchBookContainer;

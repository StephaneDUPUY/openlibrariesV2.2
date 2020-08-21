import { connect } from 'react-redux';

import ModalRecapReserveBook from 'src/components/HomeUser/PageHome/Modals/ModalRecapReserveBook';

import { hideModalBookingValidate, bookingValidate } from 'src/store/actions';


// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    showModalReserveBook: state.searchBook.showModalReserveBook,
    messageAfterBooking: state.searchBook.messageAfterBooking,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => {
    dispatch(hideModalBookingValidate());
  },
  closeModalValidateBooking: () => {
    dispatch(hideModalBookingValidate());
  },
  validateBooking: () => {
    dispatch(bookingValidate());
  },
});

const ModalRecapReserveBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalRecapReserveBook);

export default ModalRecapReserveBookContainer;

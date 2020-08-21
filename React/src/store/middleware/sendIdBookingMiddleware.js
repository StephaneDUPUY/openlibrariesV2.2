import axios from 'axios';

import { SEND_ID_BOOK_LEND, updateBookingState } from 'src/store/actions';

const sendIdBookingMiddleware = (store) => (next) => (action) => {
  const { bookingId } = store.getState().book;
  const token = window.localStorage.getItem('token');
  // console.log('Midd id booking', bookingId);

  switch (action.type) {
    case SEND_ID_BOOK_LEND:
      axios
        .post(`http://localhost:8000/api/booking/end/${bookingId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((responseUpdated) => {
          const updatedState = responseUpdated.data.dateOfDisposal;
          store.dispatch(updateBookingState(updatedState));
        })
        .catch((error) => {
          // console.log(error);
        });

      break;
    default:
      // by default let action pass
      next(action);
  }
};

export default sendIdBookingMiddleware;

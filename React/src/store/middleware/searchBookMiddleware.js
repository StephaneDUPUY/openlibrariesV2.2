import axios from 'axios';

import {
  SUBMIT_FORM_SEARCH,
  getBookBySearch,
  VALIDATE_BOOKING,
  messageAfterBooking,
  displayMessageErrorSearchBook,
 } from 'src/store/actions';



const SearchBookMiddleware = (store) => (next) => (action) => {
  const search = store.getState().searchBook.inputSearchValue;
  const token = window.localStorage.getItem('token');

  const { ownerId } = store.getState().searchBook;
  const { bookId } = store.getState().searchBook;



  switch (action.type) {
    case SUBMIT_FORM_SEARCH:
      // connexion to API
      axios
        // use URL for search title relating
        .get(`http://localhost:8000/api/user/searchbook/title/${search}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        // if ok then store
        .then((response) => {
          const responseBook = response.data;
          store.dispatch(getBookBySearch(responseBook));
        })
        .catch((error) => {
          // console.log(error);
          if (error) {
            store.dispatch(displayMessageErrorSearchBook());
          }
        });

      break;
    case VALIDATE_BOOKING:
      // if these 2 lines set upper , apllication crash
      const library = store.getState().book.bookSearch.datasUsers[0];
      const isLibrary = library.name;

      if (isLibrary) {
        axios
          .get(`http://localhost:8000/api/user/booking/add/library/${bookId}/${ownerId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response1) => {
            const messageConfirmBooking = response1.data;
            store.dispatch(messageAfterBooking(messageConfirmBooking));
          })
          .catch((error) => {
            // console.log(error);
          });
      } else {
        axios
          .get(`http://localhost:8000/api/user/booking/add/${bookId}/${ownerId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response2) => {
            const messageConfirmBooking = response2.data;
            store.dispatch(messageAfterBooking(messageConfirmBooking));
          })
          .catch((error) => {
            // console.log(error);
          });
      }
      break;
    default:
      // by default let action pass
      next(action);
  }
};

export default SearchBookMiddleware;

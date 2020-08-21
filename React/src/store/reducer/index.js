import { combineReducers } from 'redux';

// j'importe mes reducers
import formLogin from './formLogin';
import user from './user';
import book from './book';
import isbnForm from './isbnForm';
import searchBook from './searchBook';
import formAddUser from './formAddUser';


// goal is to have several reducers and class inforations by categories
// easier to find/understand

// gaol is to mix reducers in one en un seul, since store manage only one reducer
// combineReducers return object
// https://redux.js.org/api/combinereducers/
const reducer = combineReducers({
  // user: user,
  formLogin,
  user,
  book,
  isbnForm,
  searchBook,
  formAddUser,
});

export default reducer;

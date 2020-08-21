// --- action types
export const CHANGE_INPUT_VALUE_FORM_LOGIN = 'CHANGE_INPUT_VALUE_FORM_LOGIN';
export const SUBMIT_FORM_LOGIN = 'SUBMIT_FORM_LOGIN';
export const LOG_USER = 'LOG_USER';
export const STAY_CONNECTED = 'STAY_CONNECTED';
export const LIST_BOOKS_BY_CATEGORY = 'LIST_BOOKS_BY_CATEGORY';
export const CHANGE_INPUT_VALUE_FORM_ISBN = 'CHANGE_INPUT_VALUE_FORM_ISBN';
export const SUBMIT_FORM_ISBN = 'SUBMIT_FORM_ISBN';
export const CHANGE_VALUE_SEARCH = 'CHANGE_VALUE_SEARCH';
export const SUBMIT_FORM_SEARCH = 'SUBMIT_FORM_SEARCH';
export const GET_USER = 'GET_USER';
export const SET_DATA_USER = 'SET_DATA_USER';
export const LOGOUT = 'LOGOUT';
export const IS_LOGGED = 'IS_LOGGED';
export const GET_ALL_DATAS = 'GET_ALL_DATAS';
export const CHANGE_INPUT_VALUE_FORM_ADD_USER = 'CHANGE_INPUT_VALUE_FORM_ADD_USER';
export const SUBMIT_FORM_ADD_USER = 'SUBMIT_FORM_ADD_USER';
export const ON_KEY_PRESS = 'ON_KEY_PRESS';
export const STOP_LOADER = 'STOP_LOADER';
export const DISPLAY_LOADER = 'DISPLAY_LOADER';
export const SET_USERS = 'SET_USERS';
export const CLOSED_MODAL_SEARCH_ISBN = 'CLOSED_MODAL_SEARCH_ISBN';
export const RESPONSE_BOOK_ISBN = 'RESPONSE_BOOK_ISBN';
export const HIDE_MODAL_RESPONSE_BOOK_ISBN = 'HIDE_MODAL_RESPONSE_BOOK_ISBN';
export const CLOSE_RESPONSE_MODAL_ISBN = 'CLOSE_RESPONSE_MODAL_ISBN';
export const OPEN_MODAL_SUCCESS_ADD_BOOK_ISBN = 'OPEN_MODAL_SUCCESS';
export const CLOSE_MODAL_SUCCESS_ADD_BOOK_ISBN = 'CLOSE_MODAL_SUCCESS_ADD_BOOK_ISBN';
export const OPEN_MODAL_SEARCH_ISBN = 'OPEN_MODAL_SEARCH_ISBN';
export const SHOW_ONE_BOOK = 'SHOW_ONE_BOOK';
export const CLOSE_DISPLAY_ONE_BOOK = 'CLOSE_DISPLAY_ONE_BOOK';
export const GET_BORROWED_BOOKS = 'GET_BORROWED_BOOKS';
export const GET_BOOK_LEND = 'GET_BOOK_LEND';
export const LOGIN_FAILURE_MESSAGE = 'LOGIN_FAILURE_MESSAGE';
export const SET_ALL_BOOKS = 'SET_ALL_BOOKS';
export const GET_BOOK_BY_SEARCH = 'GET_BOOK_BY_SEARCH';
export const CLOSE_RESULT_SEARCH_BOOK = 'CLOSE_RESULT_SEARCH_BOOK';
export const SET_ADDRESS_API = 'SET_ADDRESS_API';
export const CHANGE_ADDRESS_FROM_API = 'CHANGE_ADDRESS_FROM_API';
export const CLEAR_INPUT_ADDRESS = 'CLEAR_INPUT_ADDRESS';
export const ADD_BOOK_IN_BOOKING = 'ADD_BOOK_IN_BOOKING';
export const CONFIRM_ADD_BOOK = 'CONFIRM_ADD_BOOK';
export const DISPLAY_MESSAGE_ERROR = 'DISPLAY_MESSAGE_ERROR';
export const SEND_ID_BOOK_LEND = 'SEND_ID_BOOK_LEND';
export const GET_ID_BOOK_LEND = 'GET_ID_BOOK_LEND';
export const DISPLAY_MESSAGE_SUCCESS_ADD_USER = 'DISPLAY_MESSAGE_SUCCESS_ADD_USER';
export const SHOW_MODAL_ADD_NEW_USER = 'SHOW_MODAL_ADD_NEW_USER';
export const CLOSE_MODAL_ADD_NEW_USER = 'CLOSE_MODAL_ADD_NEW_USER';
export const CLOSE_MODAL_SUCCESS_ADD_USER = 'CLOSE_MODAL_SUCCESS_ADD_USER';
export const GET_LATEST_BOOK = 'GET_LATEST_BOOK';
export const UPDATE_BOOKING_STATE = 'UPDATE_BOOKING_STATE';
export const SET_BOOKING = 'SET_BOOKING';
export const VALIDATE_BOOKING = 'VALIDATE_BOOKING';
export const UPDATE_BOOK_IN_BOOKING = 'UPDATE_BOOK_IN_BOOKING';
export const OPEN_MODAL_VALIDATE = 'OPEN_MODAL_VALIDATE';
export const CLOSE_MODAL_VALIDATE_BOOKING = 'CLOSE_MODAL_VALIDATE_BOOKING';
export const MESSAGE_AFTER_BOOKING = 'MESSAGE_AFTER_BOOKING';
export const SET_TYPES = 'SET_TYPES';
export const SET_THE_CATEGORY_ASKED = 'SET_THE_CATEGORY_ASKED';
export const GET_THE_CATEGORY_ASKED = 'GET_THE_CATEGORY_ASKED';
export const INIT_APP_LIST_BOOKS_BY_ONE_CATEGORY = 'INIT_APP_LIST_BOOKS_BY_ONE_CATEGORY';
export const DISPLAY_MESSAGE_ERROR_SEARCH_BOOK = 'DISPLAY_MESSAGE_ERROR_SEARCH_BOOK';
export const CLOSE_MODAL_ERROR_SEARCH_BOOK = 'CLOSE_MODAL_ERROR_SEARCH_BOOK';
export const OPEN_RESULTS_OWNER_BOOK = 'OPEN_RESULTS_OWNER_BOOK';
export const OPEN_RESULT_OWNER_AFTER_CLICK_ON_BOOK = 'OPEN_RESULT_OWNER_AFTER_CLICK_ON_BOOK';
export const EMPTY_INPUT_LOGIN = 'EMPTY_INPUT_LOGIN';

// --- action creators

//  -------------------   form login ---------------
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT_VALUE_FORM_LOGIN,
  name,
  value,
});

export const submitFormLogin = () => ({
  type: SUBMIT_FORM_LOGIN,
});

export const loginFailureMessage = () => ({
  type: LOGIN_FAILURE_MESSAGE,
});

export const deleteInput = () => ({
  type: EMPTY_INPUT_LOGIN,
});


//  ----------------  stock dans le state ,objet User + role ----------------
export const setProfilUser = (dataUser, roleUser) => ({
  type: SET_DATA_USER,
  dataUser,
  roleUser,
});

export const setTypes = (types) => ({
  type: SET_TYPES,
  types,
})

export const listBookByOneCategoryInitApp = (listInitOneCategory) => ({
  type: INIT_APP_LIST_BOOKS_BY_ONE_CATEGORY,
  listInitOneCategory,
});
// ------------ page HomeUser, books by category -----
// export const setBooksByCategory = (listBooksFilterCategory) => ({
//   type: LIST_BOOKS_BY_CATEGORY,
//   listBooksFilterCategory,
// });

export const setTheCategory = (category) => ({
  type: SET_THE_CATEGORY_ASKED,
  category,
});

export const getCategoryAsked = () => ({
  type: GET_THE_CATEGORY_ASKED,
});

export const bookReceiveByCategory = (listBooksByCategory) => ({
  type: LIST_BOOKS_BY_CATEGORY,
  listBooksByCategory,
});
// page Board, all books list

export const setAllBooks = (allBooks) => ({
  type: SET_ALL_BOOKS,
  allBooks,
});

//  ------------------  To stay connected ------------------
export const isLogged = () => ({
  type: IS_LOGGED,
});

//  ------------------------- allow to ahve all datas at each refresh -------------
export const getAllDatas = () => ({
  type: GET_ALL_DATAS,
});


export const stopLoader = () => ({
  type: STOP_LOADER,
});

export const displayLoader = () => ({
  type: DISPLAY_LOADER,
});

//  ----------------  logout --------------------------
export const logoutUser = () => ({
  type: LOGOUT,
});


// -----------------------ISBN form -----------
export const openModalSearchIsbn = () => ({
  type: OPEN_MODAL_SEARCH_ISBN,
});

export const changeInputIsbn = (value) => ({
  type: CHANGE_INPUT_VALUE_FORM_ISBN,
  value,
});

export const submitFormIsbn = () => ({
  type: SUBMIT_FORM_ISBN,
});


export const closedModalSearchIsbn = () => ({
  type: CLOSED_MODAL_SEARCH_ISBN,
});

export const displayMessageError = () => ({
  type: DISPLAY_MESSAGE_ERROR,
});

export const responseBookIsbn = (datas) => ({
  type: RESPONSE_BOOK_ISBN,
  datas,
});

export const confirmAddBook = (datas) => ({
  type: CONFIRM_ADD_BOOK,
  datas,
});

export const hideModalResponseBook = () => ({
  type: HIDE_MODAL_RESPONSE_BOOK_ISBN,
});

export const closeResponseModal = () => ({
  type: CLOSE_RESPONSE_MODAL_ISBN,
});

export const openModalSuccess = () => ({
  type: OPEN_MODAL_SUCCESS_ADD_BOOK_ISBN,
});

export const closeModalSuccessAddBookIsbn = () => ({
  type: CLOSE_MODAL_SUCCESS_ADD_BOOK_ISBN,
});

export const addTheBookInBooking = () => ({
  type: ADD_BOOK_IN_BOOKING,
});

//  -------------------  search book page HomeUser -------

export const changeSearchValue = (value) => ({
  type: CHANGE_VALUE_SEARCH,
  value,
});

export const submitFormSearch = () => ({
  type: SUBMIT_FORM_SEARCH,
});

export const displayMessageErrorSearchBook = () => ({
  type: DISPLAY_MESSAGE_ERROR_SEARCH_BOOK,
});

export const getBookBySearch = (bookSearch) => ({
  type: GET_BOOK_BY_SEARCH,
  bookSearch,
});

export const setBooking = (ownerId, bookId) => ({
  type: SET_BOOKING,
  ownerId,
  bookId,
});

export const closeModalErrorSearchBook = () => ({
  type: CLOSE_MODAL_ERROR_SEARCH_BOOK,
});

export const openValidateModal = () => ({
  type: OPEN_MODAL_VALIDATE,
});

export const bookingValidate = () => ({
  type: VALIDATE_BOOKING,
});

export const hideModalBookingValidate = () => ({
  type: CLOSE_MODAL_VALIDATE_BOOKING,
});

export const messageAfterBooking = (messageAfterBooking) => ({
  type: MESSAGE_AFTER_BOOKING,
  messageAfterBooking,
});

export const openOwnerResultBooks = () => ({
  type: OPEN_RESULTS_OWNER_BOOK,
});


//  ------------------- form add user ---------------
export const showModalAddNewUser = () => ({
  type: SHOW_MODAL_ADD_NEW_USER,
});
export const closeModalAddUser = () => ({
  type: CLOSE_MODAL_ADD_NEW_USER,
});

export const changeInputAddUser = (name, value) => ({
  type: CHANGE_INPUT_VALUE_FORM_ADD_USER,
  name,
  value,
});

export const submitFormAddUser = () => ({
  type: SUBMIT_FORM_ADD_USER,
});

export const onKeyPress = () => ({
  type: ON_KEY_PRESS,
});

export const setAddressAPI = (addressesAPI) => ({
  type: SET_ADDRESS_API,
  addressesAPI,
});

export const changeAddressFromToAPI = (newAddressApi) => ({
  type: CHANGE_ADDRESS_FROM_API,
  newAddressApi,
});

export const clearInputAddress = () => ({
  type: CLEAR_INPUT_ADDRESS,
});

export const setUsers = (usersBoard) => ({
  type: SET_USERS,
  usersBoard,
});

export const displayMessageSuccess = () => ({
  type: DISPLAY_MESSAGE_SUCCESS_ADD_USER,
});

export const closeModalSuccessUser = () => ({
  type: CLOSE_MODAL_SUCCESS_ADD_USER,
});

// --------------------  dislplay only one book -----------------
export const showOneBook = (currentBook) => ({
  type: SHOW_ONE_BOOK,
  currentBook,
});

export const closeDisplayOneBook = () => ({
  type: CLOSE_DISPLAY_ONE_BOOK,
});

export const closeResultSearchBook = () => ({
  type: CLOSE_RESULT_SEARCH_BOOK,
});

export const openResultOwnerAfterClickOnBook = () => ({
  type: OPEN_RESULT_OWNER_AFTER_CLICK_ON_BOOK,
});
// -------------------- display a book borrowed -----------------
export const getBorrowedBooks = (bookBorrowed) => ({
  type: GET_BORROWED_BOOKS,
  bookBorrowed,
});

// -------------------- display a book to borrow -----------------
export const getBookILend = (bookILend) => ({
  type: GET_BOOK_LEND,
  bookILend,
});

// -------------------- send book's ID returned -----------------
export const getIdBookLend = (bookingId) => ({
  type: GET_ID_BOOK_LEND,
  bookingId,
});

export const sendIdBookLend = () => ({
  type: SEND_ID_BOOK_LEND,
});

export const getLatestBook = (latestBooks) => ({
  type: GET_LATEST_BOOK,
  latestBooks,
});

export const updateBookingState = (bookingUpdated) => ({
  type: UPDATE_BOOKING_STATE,
  bookingUpdated,
});

export const updateBookInBooking = (bookData) => ({
  type: UPDATE_BOOK_IN_BOOKING,
  bookData,
});

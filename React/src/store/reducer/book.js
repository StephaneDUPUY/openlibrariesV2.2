import {
  LIST_BOOKS_BY_CATEGORY,
  SHOW_ONE_BOOK,
  CLOSE_DISPLAY_ONE_BOOK,
  GET_BORROWED_BOOKS,
  GET_BOOK_LEND,
  SET_ALL_BOOKS,
  GET_BOOK_BY_SEARCH,
  CLOSE_RESULT_SEARCH_BOOK,
  GET_ID_BOOK_LEND,
  GET_LATEST_BOOK,
  UPDATE_BOOKING_STATE,
  UPDATE_BOOK_IN_BOOKING,
  SET_TYPES,
  SET_THE_CATEGORY_ASKED,
  INIT_APP_LIST_BOOKS_BY_ONE_CATEGORY,
  OPEN_RESULTS_OWNER_BOOK,
  OPEN_RESULT_OWNER_AFTER_CLICK_ON_BOOK,
} from 'src/store/actions';


const initialState = {
  listBooksByCategory: [],
  allBooks: {},
  currentBook: {},
  showBigBook: '',
  showOneBook: 'none',
  showResultBook: 'none',
  showResultOwnersAfterSearchByTitle: 'none',
  showResultOwnerAfterClickOnBook: 'none',
  bookBorrowed: {},
  bookILend: {},
  bookSearch: '',
  bookingId: '',
  latestBooks: [],
  listTypes: [],
  categoryAsked: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INIT_APP_LIST_BOOKS_BY_ONE_CATEGORY:
      return {
        ...state,
        listBooksByCategory: action.listInitOneCategory,
      };
    case LIST_BOOKS_BY_CATEGORY:
      return {
        ...state,
        listBooksByCategory: action.listBooksByCategory,
      };
    case SET_THE_CATEGORY_ASKED:
      return {
        ...state,
        categoryAsked: action.category,
      };
    case SET_TYPES:
      return {
        ...state,
        listTypes: action.types,
      };
    case SHOW_ONE_BOOK:
      return {
        ...state,
        currentBook: action.currentBook,
        showBigBook: 'none',
        showResultBook: 'none',
        showOneBook: '',
      };
    case CLOSE_DISPLAY_ONE_BOOK:
      return {
        ...state,
        showBigBook: '',
        showOneBook: 'none',
        showResultBook: 'none',
        showResultOwnerAfterClickOnBook: 'none',
      };
    case CLOSE_RESULT_SEARCH_BOOK:
      return {
        ...state,
        showBigBook: '',
        showOneBook: 'none',
        showResultBook: 'none',
        showResultOwnersAfterSearchByTitle: 'none',
      };
    case GET_BORROWED_BOOKS:
      return {
        ...state,
        bookBorrowed: action.bookBorrowed,
      };
    case GET_BOOK_LEND:
      return {
        ...state,
        bookILend: action.bookILend,
      };
    case SET_ALL_BOOKS:
      return {
        ...state,
        allBooks: action.allBooks,
      };
    case GET_BOOK_BY_SEARCH:
      return {
        ...state,
        bookSearch: action.bookSearch,
        showResultBook: '',
        showResultOwnersAfterSearchByTitle: '',
        showBigBook: 'none',
        showOneBook: 'none',
      };
    case GET_ID_BOOK_LEND:
      return {
        ...state,
        bookingId: action.bookingId,
      };
    case GET_LATEST_BOOK:
      return {
        ...state,
        latestBooks: action.latestBooks,
      };
    case UPDATE_BOOK_IN_BOOKING:
      return {
        ...state,
        bookILend: [...state.bookILend, action.bookData],
      };
    case OPEN_RESULTS_OWNER_BOOK:
      return {
        ...state,
        showResultOwnerBook: '',
      };
    case OPEN_RESULT_OWNER_AFTER_CLICK_ON_BOOK:
      return {
        ...state,
        showResultOwnerAfterClickOnBook: '',
        showResultOwnersAfterSearchByTitle: 'none',
      };
    default: return state;
  }
};

export default reducer;

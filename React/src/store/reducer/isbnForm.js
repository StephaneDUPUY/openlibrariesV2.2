import {
  CHANGE_INPUT_VALUE_FORM_ISBN,
  RESPONSE_BOOK_ISBN,
  HIDE_MODAL_RESPONSE_BOOK_ISBN,
  CLOSE_RESPONSE_MODAL_ISBN,
  CLOSE_MODAL_SUCCESS_ADD_BOOK_ISBN,
  CLOSED_MODAL_SEARCH_ISBN,
  OPEN_MODAL_SEARCH_ISBN,
  CONFIRM_ADD_BOOK,
  DISPLAY_MESSAGE_ERROR,
} from 'src/store/actions';

// --- initial state
const initialState = {
  isbn: '',
  showModalSearch: false,
  responseBookIsbn: {},
  showModalResponse: false,
  showModalSuccessAddBook: false,
  messageErrorIsbn: '',
};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_MODAL_SEARCH_ISBN:
      return {
        ...state,
        showModalSearch: true,
      };
    case CHANGE_INPUT_VALUE_FORM_ISBN:
      return {
        ...state,
        // ISBN state updated
        isbn: action.value,
      };
    case CLOSED_MODAL_SEARCH_ISBN:
      return {
        ...state,
        showModalSearch: false,
      };
    case DISPLAY_MESSAGE_ERROR:
      return {
        ...state,
        showModalSearch: false,
        showModalResponse: true,
        messageErrorIsbn: 'Désolé nous n\' avons pas trouvé votre livre, veuillez utilisez le formulaire d\'ajout manuel',
      };
    case RESPONSE_BOOK_ISBN:
      return {
        ...state,
        responseBookIsbn: action.datas,
        showModalSearch: false,
        showModalResponse: true,
      };
    case HIDE_MODAL_RESPONSE_BOOK_ISBN:
      return {
        ...state,
        showModalResponse: false,
      };
    case CLOSE_RESPONSE_MODAL_ISBN:
      return {
        ...state,
        showModalResponse: false,
        showModalSuccessAddBook: true,
      };
    case CLOSE_MODAL_SUCCESS_ADD_BOOK_ISBN:
      return {
        ...state,
        showModalSuccessAddBook: false,
      };
    case CONFIRM_ADD_BOOK:
      return {
        ...state,
        showModalResponse: true,
      };
    default: return state;
  }
};

// --- export
export default reducer;

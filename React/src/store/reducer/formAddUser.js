import {
  CHANGE_INPUT_VALUE_FORM_ADD_USER,
  SET_ADDRESS_API,
  CHANGE_ADDRESS_FROM_API,
  CLEAR_INPUT_ADDRESS,
  DISPLAY_MESSAGE_SUCCESS_ADD_USER,
  SHOW_MODAL_ADD_NEW_USER,
  CLOSE_MODAL_ADD_NEW_USER,
  CLOSE_MODAL_SUCCESS_ADD_USER,
} from 'src/store/actions';

// --- initial state
const initialState = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  address: '',
  phone: '',
  addressesAPI: [],
  showInputApi: 'block',
  showModalSuccessAddUser: false,
  showModalAddUser: false,

};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL_ADD_NEW_USER:
      return {
        ...state,
        showModalAddUser: true,
        showModalSuccessAddUser: false,
      };
    case CLOSE_MODAL_ADD_NEW_USER:
      return {
        ...state,
        showModalAddUser: false,
      };
    case CHANGE_INPUT_VALUE_FORM_ADD_USER:
      return {
        ...state,
        // en fonction du nom du champ je mets à jour le bon state
        [action.name]: action.value,
      };
    case SET_ADDRESS_API:
      return {
        ...state,
        addressesAPI: action.addressesAPI,
      };
    case CHANGE_ADDRESS_FROM_API:
      return {
        ...state,
        address: action.newAddressApi,
        showInputApi: 'none',
      };
    case CLEAR_INPUT_ADDRESS:
      return {
        ...state,
        address: '',
        addressesAPI: [],
        showInputApi: 'block',
      };
    case DISPLAY_MESSAGE_SUCCESS_ADD_USER:
      return {
        ...state,
        showModalSuccessAddUser: true,
        showModalAddUser: false,
      };
    case CLOSE_MODAL_SUCCESS_ADD_USER:
      return {
        ...state,
        showModalSuccessAddUser: false,
        showModalAddUser: false,
      };
    default: return state;
  };
};

// --- export
export default reducer;

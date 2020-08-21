import { CHANGE_INPUT_VALUE_FORM_LOGIN, LOGIN_FAILURE_MESSAGE, EMPTY_INPUT_LOGIN } from 'src/store/actions';

// --- initial state
const initialState = {
  email: '',
  password: '',
  loginFailureMessage: '',
};

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // actions relalating states of form
    case CHANGE_INPUT_VALUE_FORM_LOGIN:
      return {
        ...state,
        // relating name of field, good state updated
        [action.name]: action.value,
        loginFailureMessage: '',
      };
    // case fail fields
    case LOGIN_FAILURE_MESSAGE:
      return {
        ...state,
        loginFailureMessage: 'Mauvais email ou mot de passe, veuillez réessayer svp',
      };
    // case empty fields
    case EMPTY_INPUT_LOGIN:
      return {
        ...state,
        email: '',
        password: '',
      };

    default: return state;
  }
};

// --- export
export default reducer;

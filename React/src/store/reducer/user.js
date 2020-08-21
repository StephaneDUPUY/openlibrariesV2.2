import {
  IS_LOGGED,
  STAY_CONNECTED,
  SET_DATA_USER,
  LOGOUT,
  DISPLAY_LOADER,
  STOP_LOADER,
  SET_USERS,
} from 'src/store/actions';

const initialState = {
  //  to be modified
  isLogged: false,
  typeUser: '',
  datasUser: '',
  user: {},
  loading: false,
  usersBoard: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOGGED:

      return {
        ...state,
        isLogged: true,
      };
    case STAY_CONNECTED:

      return {
        ...state,
        isLogged: true,
      };
    case SET_DATA_USER:
      return {
        ...state,
        user: action.dataUser,
        typeUser: action.roleUser,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLogged: false,
      };
    case STOP_LOADER:
      return {
        ...state,
        loading: false,
      };
    case DISPLAY_LOADER:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS:
      return {
        ...state,
        usersBoard: action.usersBoard,
      };
    default: return state;
  }
};

export default reducer;

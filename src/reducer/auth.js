export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const APP_LOAD = "APP_LOAD";
export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        login: false,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        error: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        error: action.error.message,
      };

    case APP_LOAD:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";
export const APP_LOAD = "APP_LOAD";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILED = "SIGNUP_FAILED";

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
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

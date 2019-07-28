import api from "../api";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_USER,
  LOGOUT,
} from "../reducer/auth";
import { APP_LOAD } from "../reducer/app";
export const login = ({ email, password }, history) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const data = await api.Auth.login(email, password);
    history.push("/");
    localStorage.setItem("token", data.user.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    dispatch({ type: APP_LOAD, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED, error });
  }
};

export const logout = history => {
  return dispatch => {
    localStorage.removeItem("token");
    history.push("/");
    dispatch({ type: LOGOUT });
  };
};

export const getCurrentUser = () => async dispatch => {
  const data = await api.Auth.getUser();
  dispatch({ type: APP_LOAD, payload: data.user });
};

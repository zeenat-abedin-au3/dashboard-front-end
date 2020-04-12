import {
  SHOW_MODAL,
  HIDE_MODAL,
  LOGIN,
  SET_ERROR,
  CLEAR_ERROR,
  LOGOUT,
  SIGNUP,
} from "../actions/actionType";

const INITIAL_STATE = {
  visible: false,
  useName: "",
  token: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload.token,
        userName: payload.fullName,
      };
    case SIGNUP:
      return {
        ...state,
        token: payload,
        userName: payload.fullName,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        error: null,
        visible: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default authReducer;

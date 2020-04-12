import {
  SHOW_MODAL,
  HIDE_MODAL,
  LOGIN,
  SET_ERROR,
} from "../actions/actionType";

const INITIAL_STATE = {
  visible: false,
  token: null,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        token: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
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

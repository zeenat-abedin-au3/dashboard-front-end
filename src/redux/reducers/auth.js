import { SHOW_MODAL, HIDE_MODAL } from "../actions/actionType";

const INITIAL_STATE = {
  visible: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

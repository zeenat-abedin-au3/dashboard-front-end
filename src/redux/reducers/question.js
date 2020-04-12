import { SET_QUESTION } from "../actions/actionType";

const INITIAL_STATE = {};

const questionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTION:
      return {
        ...state,
        [payload.name]: payload.value,
      };

    default:
      return state;
  }
};

export default questionReducer;

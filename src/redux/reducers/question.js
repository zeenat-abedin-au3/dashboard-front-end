import { SET_QUESTION, CREATE_QUES_OBJ } from "../actions/actionType";

const INITIAL_STATE = {};

const questionReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_QUESTION:
      const { qName, name, value } = payload;

      return {
        ...state,
        [qName]: {
          ...state[qName],
          [name]: value,
        },
      };
    case CREATE_QUES_OBJ:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default questionReducer;

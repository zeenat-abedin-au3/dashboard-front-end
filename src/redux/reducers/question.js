import {
  SET_QUESTION,
  CREATE_QUES_OBJ,
  SELECTED_ANSWER,
  CREATE_TEST,
} from "../actions/actionType";

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
    case SELECTED_ANSWER:
      const { qName: qN, ans } = payload;
      return {
        ...state,
        [qN]: {
          ...state[qN],
          ["answers"]: ans,
        },
      };
    case CREATE_QUES_OBJ:
      return {
        ...state,
        ...payload,
      };
    case CREATE_TEST:
      return {};
    default:
      return state;
  }
};

export default questionReducer;

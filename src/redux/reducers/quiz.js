import { QUIZ_DETAILS } from "../actions/actionType";

const INITIAL_STATE = {
  quizDetails: {
    quizName: "",
    numQuestion: "",
    marks: "",
    quizTime: "",
  },
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUIZ_DETAILS:
      return {
        ...state,
        quizDetails: { ...action.payload },
      };

    default:
      return state;
  }
};

export default quizReducer;

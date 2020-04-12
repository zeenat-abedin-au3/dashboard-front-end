import { TEST_DETAILS } from "../actions/actionType";

const INITIAL_STATE = {
  testDetails: {
    testName: "",
    numQuestion: 4,
    marks: "",
    testTime: "",
  },
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST_DETAILS:
      return {
        ...state,
        testDetails: { ...action.payload },
      };

    default:
      return state;
  }
};

export default testReducer;

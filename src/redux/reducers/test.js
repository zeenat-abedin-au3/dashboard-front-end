import { TEST_DETAILS, GET_TESTS } from "../actions/actionType";

const INITIAL_STATE = {
  testDetails: {
    testName: "",
    numQuestion: "",
    marks: "",
    testTime: "",
  },
  tests: null,
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST_DETAILS:
      return {
        ...state,
        testDetails: { ...action.payload },
      };
    case GET_TESTS:
      return {
        ...state,
        tests: action.payload,
      };

    default:
      return state;
  }
};

export default testReducer;

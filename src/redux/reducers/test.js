import {
  TEST_DETAILS,
  GET_TESTS,
  GET_TEST_DETAILS,
  CLEAN_SINGLE_TEST_DETAILS,
} from "../actions/actionType";

const INITIAL_STATE = {
  testDetails: {
    testName: "",
    numQuestion: "",
    marks: "",
    testTime: "",
  },
  tests: [],
  singleTest: null,
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
    case GET_TEST_DETAILS:
      return {
        ...state,
        singleTest: action.payload,
      };
    case CLEAN_SINGLE_TEST_DETAILS:
      return {
        ...state,
        singleTest: null,
      };
    default:
      return state;
  }
};

export default testReducer;

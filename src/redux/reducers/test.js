import {
  TEST_DETAILS,
  GET_TESTS,
  GET_TEST_DETAILS,
  CLEAN_SINGLE_TEST_DETAILS,
  LOGOUT,
  CREATE_TEST,
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
    case CREATE_TEST:
      return {
        testDetails: {
          testName: "",
          numQuestion: "",
          marks: "",
          testTime: "",
        },
        tests: [],
        singleTest: null,
      };
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
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        tests: [],
        singleTest: null,
      };
    default:
      return state;
  }
};

export default testReducer;

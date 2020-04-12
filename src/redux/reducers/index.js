import { combineReducers } from "redux";

import authReducer from "./auth";
import testReducer from "./test";
import questionReducer from "./question";

export default combineReducers({
  auth: authReducer,
  test: testReducer,
  question: questionReducer,
});

import { combineReducers } from "redux";

import authReducer from "./auth";
import testReducer from "./test";

export default combineReducers({
  auth: authReducer,
  test: testReducer,
});

import { TEST_DETAILS, SET_QUESTION } from "./actionType";

export const testDetail = (data) => ({
  type: TEST_DETAILS,
  payload: data,
});

export const setQuestion = (name, value) => ({
  type: SET_QUESTION,
  payload: { name, value },
});

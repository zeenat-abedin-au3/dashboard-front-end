import { TEST_DETAILS } from "./actionType";

export const testDetail = (data) => ({
  type: TEST_DETAILS,
  payload: data,
});

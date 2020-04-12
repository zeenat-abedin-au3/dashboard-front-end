import { TEST_DETAILS, SET_QUESTION, CREATE_QUES_OBJ } from "./actionType";

export const testDetail = (data) => ({
  type: TEST_DETAILS,
  payload: data,
});

export const setQuestion = (qName, name, value) => ({
  type: SET_QUESTION,
  payload: { qName, name, value },
});

export const createQuestionObj = (number) => {
  const obj = {};
  for (let i = 1; i <= number; i++) {
    const qName = `multiple-choice-${i}`;
    obj[qName] = {
      question: "",
      "option-1": "",
      "option-2": "",
      "option-3": "",
      "option-4": "",
    };
  }
  return {
    type: CREATE_QUES_OBJ,
    payload: obj,
  };
};

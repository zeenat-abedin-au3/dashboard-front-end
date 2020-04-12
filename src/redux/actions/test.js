import {
  TEST_DETAILS,
  SET_QUESTION,
  CREATE_QUES_OBJ,
  SELECTED_ANSWER,
} from "./actionType";

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
      answers: "",
    };
  }
  return {
    type: CREATE_QUES_OBJ,
    payload: obj,
  };
};

export const selectedAnswer = (qName, ans) => ({
  type: SELECTED_ANSWER,
  payload: { qName, ans },
});

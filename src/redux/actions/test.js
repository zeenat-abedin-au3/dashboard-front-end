import swal from "sweetalert";

import {
  TEST_DETAILS,
  SET_QUESTION,
  CREATE_QUES_OBJ,
  SELECTED_ANSWER,
  GET_TESTS,
  SET_ERROR,
  GET_TEST_DETAILS,
  CLEAR_ERROR,
  CLEAN_SINGLE_TEST_DETAILS,
} from "./actionType";
import axios from "../../util/axios";

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

export const getTests = (token) => async (dispatch) => {
  try {
    const response = await axios.get("/test", {
      headers: { Authorization: "Bearer " + JSON.parse(token) },
    });

    const tests = response.data.data.length > 0 ? response.data.data : null;
    dispatch({
      type: GET_TESTS,
      payload: tests,
    });

    dispatch({
      type: CLEAR_ERROR,
    });
  } catch (error) {
    const { error: errorMessage } = error.response.data;
    swal("Error", errorMessage, "error");
    dispatch({
      type: SET_ERROR,
      payload: errorMessage,
    });
  }
};

export const getTestDetails = (token, testId) => async (dispatch) => {
  try {
    const response = await axios.get(`/test/${testId}`, {
      headers: { Authorization: "Bearer " + JSON.parse(token) },
    });

    dispatch({
      type: GET_TEST_DETAILS,
      payload: response.data.data,
    });

    dispatch({
      type: CLEAR_ERROR,
    });
  } catch (error) {
    const { error: errorMessage } = error.response.data;
    swal("Error", errorMessage, "error");
    dispatch({
      type: SET_ERROR,
      payload: errorMessage,
    });
  }
};

export const cleanSingleTestDetails = () => ({
  type: CLEAN_SINGLE_TEST_DETAILS,
});

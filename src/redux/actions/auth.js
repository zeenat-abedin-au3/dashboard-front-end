import axios from "../../util/axios";
import { LOGIN, SET_ERROR } from "./actionType";
import swal from "sweetalert";

export const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("/user/login", { email, password });
    const { token } = response.data;

    // set token in local storage
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({
      type: LOGIN,
      payload: token,
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

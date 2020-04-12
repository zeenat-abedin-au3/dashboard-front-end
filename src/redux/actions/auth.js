import axios from "../../util/axios";
import { LOGIN, SET_ERROR, CLEAR_ERROR, LOGOUT, SIGNUP } from "./actionType";
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
export const signup = (data) => async (dispatch) => {
  try {
    const response = await axios.post("/user/signup", { ...data });
    const { token } = response.data;

    // set token in local storage
    localStorage.setItem("token", JSON.stringify(token));

    dispatch({
      type: SIGNUP,
      payload: token,
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

export const logout = () => ({
  type: LOGOUT,
});

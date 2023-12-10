import axios from "axios";
import { server } from "../store.js";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const response = await axios.get(`${server}/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: response.data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    const response = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });
    dispatch({
      type: "logoutSuccess",
      payload: response.data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};

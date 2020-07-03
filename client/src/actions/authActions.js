import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { SET_CURRENT_USER } from "./types";

export const loginUser = data => dispatch => {
  axios
    .post("http://localhost:4000/login", data)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(e => console.log(e));
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

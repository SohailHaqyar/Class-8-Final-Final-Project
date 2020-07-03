import { combineReducers } from "redux";
import authReducer from "./authReducer";
import organizationsReducer from "./organizationsReducer";
export default combineReducers({
  auth: authReducer,
  ngo: organizationsReducer
});

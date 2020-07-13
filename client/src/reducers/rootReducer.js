import { combineReducers } from "redux";
import authReducer from "./authReducer";
import organizationsReducer from "./organizationsReducer";
import postReducer from "./postsReducer";
export default combineReducers({
  auth: authReducer,
  ngo: organizationsReducer,
  post: postReducer,
});

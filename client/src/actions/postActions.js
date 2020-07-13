import axios from "axios";
import { GET_ALL_POSTS } from "./types";

export const getAllPosts = () => (dispatch) => {
  axios
    .get("http://localhost:4000/posts")
    .then((res) => {
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data,
      });
    })
    .catch((e) => console.log(e));
};

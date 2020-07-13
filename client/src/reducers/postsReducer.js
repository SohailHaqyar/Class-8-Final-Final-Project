import { GET_ALL_POSTS } from "../actions/types";

const initialState = {
  posts: [],
};

const postsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_POSTS:
      return { ...state, posts: payload };
    default:
      return state;
  }
};
export default postsReducer;

import {
  CREATE_POST,
  GET_ALL_POSTS,
  GET_POST,
  UPDATE_POST,
  DELETE_POST,
  CREATE_POST_ERROR,
  GET_ALL_POSTS_ERROR,
  GET_POST_ERROR,
  UPDATE_POST_ERROR,
  DELETE_POST_ERROR,
} from "../types";

const initialState = {
  allPosts: [],
  currentPost: {},
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, action.payload],
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: action.payload,
      };
    default:
      return state;
  }
}

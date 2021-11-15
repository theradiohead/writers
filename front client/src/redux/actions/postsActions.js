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

import axios from "axios";

export const createPost = (text) => (dispatch) => {
  const post = axios

    .post(`http://localhost:8080/api/post/create_post`, { text })
    .then((res) => {
      console.log(
        "🚀 ~ file: postsActions.js ~ line 22 ~ .then ~ res",
        res.data
      );

      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });

      return post;
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: CREATE_POST_ERROR,
      });
    });
  return post;
};
export const getAllPosts = () => (dispatch) => {
  const post = axios
    .get(`http://localhost:8080/api/post/get_all_posts`)
    .then((res) => {
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data,
      });

      return post;
    })
    .catch((err) => {
      dispatch({
        type: GET_ALL_POSTS_ERROR,
      });
    });
  return post;
};

export const getPost = (id) => (dispatch) => {
  const post = axios
    .get(`/api/post/${id}`)
    .then((res) => {
      dispatch({
        type: GET_POST,
        payload: res.data,
      });

      return post;
    })
    .catch((err) => {
      dispatch({
        type: GET_POST_ERROR,
      });
    });
  return post;
};

export const updatePost = (id, text) => (dispatch) => {
  const post = axios
    .put(`/api/post/${id}`, { text })
    .then((res) => {
      dispatch({
        type: UPDATE_POST,
        payload: res.data,
      });

      return post;
    })
    .catch((err) => {
      dispatch({
        type: UPDATE_POST_ERROR,
      });
    });
  return post;
};

export const deletePost = (id) => (dispatch) => {
  const post = axios
    .delete(`/api/post/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_POST,
        payload: res.data,
      });

      return post;
    })
    .catch((err) => {
      dispatch({
        type: DELETE_POST_ERROR,
      });
    });
  return post;
};

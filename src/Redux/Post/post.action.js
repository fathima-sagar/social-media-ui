import axios from "axios";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_FAILURE,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USERS_POST_FAILURE,
  GET_USERS_POST_REQUEST,
  GET_USERS_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";
import { api } from "../../config/api";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const { data } = await api.post(`/api/posts/save`, postData);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    console.log("created", data);
  } catch (error) {
    console.log(error);
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
  }
};

export const getAllPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/posts`);
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("created", data);
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_POST_FAILURE, payload: error });
  }
};

export const getUserPostAction = (userId) => async (dispatch) => {
  dispatch({ type: GET_USERS_POST_REQUEST });
  try {
    const { data } = await api.get(`/api/posts/users/${userId}`);
    dispatch({ type: GET_USERS_POST_SUCCESS, payload: data });
    console.log("get user post", data);
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USERS_POST_FAILURE, payload: error });
  }
};

export const likePostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_POST_REQUEST });
  try {
    const { data } = await api.put(`/api/posts/${postId}/like`);
    dispatch({ type: LIKE_POST_SUCCESS, payload: data });
    console.log("like post", data);
  } catch (error) {
    console.log(error);
    dispatch({ type: LIKE_POST_FAILURE, payload: error });
  }
};

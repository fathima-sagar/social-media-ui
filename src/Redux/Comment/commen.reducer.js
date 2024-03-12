import { CREATE_POST_SUCCESS } from "../Post/post.actionType";
import {
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
} from "./comment.actionType";

const initialState = {
  loading: null,
  error: null,
  comments: [],
  newComment: null,
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        newComment: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_COMMENT_FAILURE:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

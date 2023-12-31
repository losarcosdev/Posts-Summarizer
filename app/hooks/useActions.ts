import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setPost,
  SET_POST,
  SET_POSTS,
  DELETE_POST,
  SET_ERROR,
} from "@/app/state";
import { setPosts } from "../state/thunks/postsThunk";

const actionCreators = {
  setPost,
  setPosts,
  SET_POST,
  SET_POSTS,
  DELETE_POST,
  SET_ERROR,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [dispatch]
  );
};

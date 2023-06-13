"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  DeletePostAction,
  Post,
  SetPostAction,
  SetPostsAction,
} from "../interfaces";

interface PostsInitialState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsInitialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    LOADING_POSTS: (state) => {
      state.loading = true;
      state.error = null;
    },

    SET_POST: (state, { payload }: PayloadAction<SetPostAction>) => {
      state.posts = [payload, ...state.posts];
      state.loading = false;
      state.error = null;
    },

    SET_POSTS: (state, { payload }: PayloadAction<SetPostsAction>) => {
      state.posts = payload.posts;
      state.loading = false;
      state.error = null;
    },

    DELETE_POST: (state, { payload }: PayloadAction<DeletePostAction>) => {
      state.posts = state.posts.filter((post) => post.id !== payload.id);
      state.loading = false;
      state.error = null;
    },

    SET_ERROR: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const { LOADING_POSTS, SET_ERROR, SET_POST, SET_POSTS, DELETE_POST } =
  postsSlice.actions;

"use client";
import { configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

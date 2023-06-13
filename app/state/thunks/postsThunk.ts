"use client";
import { getSummary } from "@/rapidApi/api";
import { LOADING_POSTS, SET_ERROR, SET_POST, SET_POSTS } from "../slices";
import { Dispatch } from "../store";
import { Post } from "../interfaces";

/**
 * getPosts - function for fetching all the posts from an external API
 * @param {function} dispatch - Dispatch function from the 'redux' library to update the global state.
 */
export const setPost = (url: string) => async (dispatch: Dispatch) => {
  dispatch(LOADING_POSTS());

  try {
    const post = await getSummary(url);

    if (!post) {
      throw new Error();
    }

    post.id = Math.random().toString();
    const storedPosts = localStorage.getItem("posts");
    let posts: Post[] = [];

    if (storedPosts) {
      posts = JSON.parse(storedPosts);
    }

    posts.unshift(post);

    localStorage.setItem("posts", JSON.stringify(posts));

    dispatch(SET_POST(post));
  } catch (error: any) {
    console.log(error);
    if (error.response) {
      dispatch(
        SET_ERROR(error.response.data.error || error.response.data.message)
      );
      setTimeout(() => {
        dispatch(SET_ERROR(null));
      }, 10000);
      return;
    }
  }
};

export const setPosts = () => (dispatch: Dispatch) => {
  const storagePosts = localStorage.getItem("posts") || "[]";
  const posts: Post[] = JSON.parse(storagePosts);

  dispatch(SET_POSTS({ posts }));
};

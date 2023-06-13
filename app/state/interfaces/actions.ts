import { Post } from "./posts";

export interface SetPostAction {
  image?: string;
  title: string;
  summary: string;
  url: string;
  id: string;
}

export interface SetPostsAction {
  posts: Post[];
}

export interface DeletePostAction {
  id: string;
}

"use client";
import { useEffect } from "react";
import { useCustomSelector } from "../hooks/useCustomSelector";
import { PostCard } from "./PostCard";
import { Spinner } from "./Spinner";
import { useActions } from "../hooks/useActions";

export const PostsList = () => {
  const { posts, loading, error } = useCustomSelector((state) => state.posts);
  const { setPosts } = useActions();

  useEffect(() => {
    setPosts();
  }, [setPosts]);

  if (error) {
    return (
      <div className="bg-red-500 text-red-950 p-4 md:w-[50%] mx-auto rounded-sm">
        <p className="font-bold text-center">{error}</p>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className="mx-auto items-center justify-center text-white">
          <Spinner />
        </div>
      )}
      {posts.map((post) => (
        <PostCard key={post.title + Math.random()} post={post} />
      ))}
    </>
  );
};

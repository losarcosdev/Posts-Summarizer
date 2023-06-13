"use client";
import { useActions } from "../hooks/useActions";
import { Post } from "../state/interfaces";

interface Props {
  id: string;
}

export const DeleteButton = ({ id }: Props) => {
  const { DELETE_POST } = useActions();

  const handleDelete = () => {
    DELETE_POST({ id });

    const storagePosts = localStorage.getItem("posts") || "[]";
    const posts: Post[] = JSON.parse(storagePosts);

    const filteredPosts = posts.filter((post) => post.id !== post.id);

    localStorage.setItem("posts", JSON.stringify(filteredPosts));
  };

  return (
    <button
      className={`hover:bg-slate-300 hover:translate-y-[0.25rem] p-2 rounded-bl-md rounded-br-md 
    w-[95%] md:w-[50%] mx-auto text-slate-800 dark:text-white bg-slate-200 dark:bg-[#212933] 
    duration-300 hover:dark:bg-[#1d232c]`}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
};

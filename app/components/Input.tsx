"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useCustomSelector } from "../hooks/useCustomSelector";

export const Input = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setPost } = useActions();

  const { loading } = useCustomSelector((state) => state.posts);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPost(inputValue);
    setInputValue(() => "");
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value;
    setInputValue(() => value);
  };

  return (
    <form
      className="w-[95%] md:w-[70%] mx-auto mt-10 text-white"
      onSubmit={handleSubmit}
    >
      <div className="relative">
        <button
          disabled={loading}
          className={`absolute right-2 top-[9px] p-1 hover:opacity-70 dark:bg-[#212933] border-gray-500 
          dark:hover:border-white border-[2px] rounded-sm text-gray-500 dark:hover:text-white duration-300
           ${loading && "opacity-30 select-none"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </button>
        <input
          disabled={loading}
          type="text"
          className={`p-3 rounded-md text-slate-800 dark:text-white bg-slate-200 dark:bg-[#212933] outline-none w-full pl-10 ${
            loading && "opacity-30 select-none"
          } duration-300`}
          placeholder="Paste the post link..."
          value={inputValue}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-link absolute top-[10px] left-2 text-gray-500 dark:text-white duration-300"
          viewBox="0 0 16 16"
        >
          <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
          <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
        </svg>
      </div>
    </form>
  );
};

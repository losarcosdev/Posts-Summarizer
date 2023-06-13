import Link from "next/link";
import { Post } from "../state/interfaces";
import { DeleteButton } from "./DeleteButton";

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <>
      <Link
        href={post.url}
        target="_blank"
        className="text-white mt-5 flex flex-col items-center p-5 gap-5 w-[95%] md:w-[50%] bg-slate-200 dark:bg-[#212933] rounded-tl-md rounded-tr-md mx-auto duration-300 hover:translate-y-[-0.25rem] fadeIn mb-[-19px] hover:bg-slate-300 hover:dark:bg-[#1d232c]"
      >
        {post.image ? (
          <img alt="" src={post.image} className="rounded-md object-contain" />
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white duration-300">
            {post.title}
          </h3>
          <p className="text-sm leading-5 text-left text-slate-800 dark:text-white duration-300">
            {post.summary}
          </p>
        </div>
      </Link>
      <DeleteButton id={post.id} />
    </>
  );
};

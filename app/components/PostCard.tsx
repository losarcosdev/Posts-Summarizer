import Link from "next/link";
import { Post } from "../state/interfaces";
import { DeleteButton } from "./DeleteButton";

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <article className="w-[95%] md:w-[50%] mx-auto flex flex-col gap-5 text-slate-800 dark:text-white duration-300 fadeIn">
      <Link
        href={post.url}
        target="_blank"
        className={`flex flex-col items-center p-5 gap-5 
        bg-slate-100 dark:bg-[#212933] hover:bg-slate-300 hover:dark:bg-[#1d232c]
        rounded-tl-md rounded-tr-md duration-300 hover:translate-y-[-0.25rem] 
        mb-[-19px]`}
      >
        {post.image ? (
          <img alt="" src={post.image} className="rounded-md object-contain" />
        ) : (
          <></>
        )}
        <div className="flex flex-col gap-5">
          <h3 className="text-3xl font-bold">{post.title}</h3>
          <p className="text-sm leading-5 text-left">{post.summary}</p>
        </div>
      </Link>
      <DeleteButton id={post.id} />
    </article>
  );
};

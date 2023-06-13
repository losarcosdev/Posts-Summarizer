import { Input, PostsList } from "./components";

export default function Home() {
  return (
    <section>
      <section className="md:w-[60%] mx-auto flex flex-col gap-5">
        <h1 className="font-extrabold text-4xl md:text-6xl text-center text-slate-800 dark:text-white tracking-wide duration-300">
          Summarize Posts with <br />
          <span className="gradient-text-1"> Open AI GPT-4</span>
        </h1>
        <p className="text-slate-800 dark:text-white mt-5 text-center md:w-[80%] md:p-0 mx-auto p-1 duration-300">
          Accelerate and enhance your reading experience with this summarization
          tool, a freely available article summarizer that converts extensive
          articles into easily understandable and brief summaries.
        </p>
        <Input />
      </section>
      <section className="flex flex-col gap-5 p-5 md:p-10">
        <PostsList />
      </section>
    </section>
  );
}

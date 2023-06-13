import axios from "axios";
import { randomUUID } from "crypto";

interface APIResponse {
  image?: string;
  title: string;
  summary: string;
  url: string;
}

export const getSummary = async (
  url: string
): Promise<{
  image: string;
  title: string;
  summary: string;
  url: string;
  id: string;
}> => {
  const summarizerOptions = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  const extractorOptions = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/extract",
    params: {
      url,
    },
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
    },
  };

  const [summarizerResponse, extractorResponse] = await Promise.all([
    axios.request<{ summary: string }>(summarizerOptions),
    axios.request<{ image: string; title: string }>(extractorOptions),
  ]);

  return {
    image: extractorResponse.data.image,
    title: extractorResponse.data.title,
    summary: summarizerResponse.data.summary,
    url,
    id: "",
  };
};

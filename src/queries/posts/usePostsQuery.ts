import { useQuery } from "@tanstack/react-query";
import { Post } from "../../model/post";

export default function usePostsQuery() {
  return useQuery(createKey(), async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (response) => (await response.json()) as Post[]
    );
  });
}

const defaultKey = "posts";
const createKey = () => [defaultKey, "list"];

usePostsQuery.defaultKey = defaultKey;
usePostsQuery.createKey = createKey;

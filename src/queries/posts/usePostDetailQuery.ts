import { useQuery } from "@tanstack/react-query";
import { Post } from "../../model/post";

export default function usePostDetailQuery(id: number) {
  return useQuery(createKey(id), async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      async (response) => (await response.json()) as Post
    );
  });
}

const defaultKey = "posts";
const createKey = (id: number) => [defaultKey, "detail", id];

usePostDetailQuery.defaultKey = defaultKey;
usePostDetailQuery.createKey = createKey;

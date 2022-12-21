import {
  createQueryKeys,
  mergeQueryKeys,
} from "@lukemorales/query-key-factory";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../../model/post";

const posts = createQueryKeys("posts", {
  list: () => ({
    queryKey: ["list"],
    async queryFn() {
      await new Promise((r) => setTimeout(r, 1000));
      return fetch("https://jsonplaceholder.typicode.com/posts").then(
        async (response) => (await response.json()) as Post[]
      );
    },
  }),
  detail: (id: number) => ({
    queryKey: [id],
    async queryFn() {
      await new Promise((r) => setTimeout(r, 1000));
      return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
        async (response) => (await response.json()) as Post
      );
    },
  }),
});

export const queries = mergeQueryKeys(posts);

export function usePostsQueryWithFactory() {
  const { queryFn, queryKey } = queries.posts.list();
  return useQuery(queryKey, queryFn);
}

export function usePostDetailQueryWithFactory(id: number) {
  const { queryFn, queryKey } = queries.posts.detail(id);
  return useQuery(queryKey, queryFn);
}

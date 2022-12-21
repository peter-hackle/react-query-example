import { useQueryClient } from "@tanstack/react-query";
import usePostsQuery from "../queries/posts/usePostsQuery";
import PostListItem from "./PostListItem";

export default function PostList() {
  const queryClient = useQueryClient();
  const { data, isFetching } = usePostsQuery();

  if (isFetching) return <h1>List Loading...</h1>;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={() =>
            queryClient.invalidateQueries([usePostsQuery.defaultKey])
          }
        >
          invalidate with ["posts"]
        </button>
        <button
          onClick={() =>
            queryClient.invalidateQueries(usePostsQuery.createKey())
          }
        >
          invalidate with ["posts", "list"]
        </button>
        <button
          onClick={() => queryClient.invalidateQueries(["posts", "detail"])}
        >
          invalidate with ["posts", "detail"]
        </button>
      </div>
      {data?.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}

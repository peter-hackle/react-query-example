import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import usePostsQuery from "../../queries/posts/usePostsQuery";
import { queries } from "../../queries/postsWithQueryFactory/posts";
import PostListItem from "../basic/PostListItem";

export default function PostListWithFactory() {
  const queryClient = useQueryClient();
  const { data, isFetching } = usePostsQuery();

  if (isFetching) return <h1>List Loading...</h1>;

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Basic</Link>
        <button
          onClick={() => queryClient.invalidateQueries(queries.posts._def)}
        >
          invalidate with {`{queries.posts._def}`}
        </button>
        <button
          onClick={() =>
            queryClient.invalidateQueries(queries.posts.list().queryKey)
          }
        >
          invalidate with {`{queries.posts.list().queryKey}`}
        </button>
        <button
          onClick={() =>
            queryClient.invalidateQueries(queries.posts.detail._def)
          }
        >
          invalidate with {`{queries.posts.detail._def}`}
        </button>
      </div>
      {data?.map((post) => (
        <PostListItem key={post.id} post={post} to="/factory/posts" />
      ))}
    </div>
  );
}

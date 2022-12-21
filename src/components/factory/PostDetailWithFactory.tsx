import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import usePostUpdateMutation from "../../queries/posts/usePostUpdateMutation";
import {
  queries,
  usePostDetailQueryWithFactory,
} from "../../queries/postsWithQueryFactory/posts";

export default function PostDetailWithFactory() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const parsedId = Number(id);

  const { data, isFetching } = usePostDetailQueryWithFactory(parsedId);
  const { mutate } = usePostUpdateMutation({
    onSuccess: () =>
      queryClient.invalidateQueries(queries.posts.detail(parsedId).queryKey),
  });

  if (isFetching || !data) return <h1>Detail Loading...</h1>;

  return (
    <div>
      <h1>Post Detail Page!</h1>
      <h2>{data.title}</h2>
      <b>{data.body}</b>
      <br />
      <button type="button" onClick={() => mutate(parsedId)}>
        Update!
      </button>
    </div>
  );
}

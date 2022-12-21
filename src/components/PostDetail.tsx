import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import usePostDetailQuery from "../queries/posts/usePostDetailQuery";
import usePostUpdateMutation from "../queries/posts/usePostUpdateMutation";

export default function PostDetail() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const parsedId = Number(id);

  const { data, isFetching } = usePostDetailQuery(parsedId);
  const { mutate } = usePostUpdateMutation({
    onSuccess: () =>
      queryClient.invalidateQueries(usePostDetailQuery.createKey(parsedId)),
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

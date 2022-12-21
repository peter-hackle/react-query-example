import { Link } from "react-router-dom";
import { Post } from "../../model/post";

interface PostListItemProps {
  post: Post;
  to: string;
}

export default function PostListItem({ post, to }: PostListItemProps) {
  const { title, body, id } = post;

  return (
    <Link to={`${to}/${id}`}>
      <h1>{title}</h1>
      <p>{body}</p>
    </Link>
  );
}

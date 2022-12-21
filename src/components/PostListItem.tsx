import { Link } from "react-router-dom";
import { Post } from "../model/post";

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  const { title, body, id } = post;

  return (
    <Link to={`/posts/${id}`}>
      <h1>{title}</h1>
      <p>{body}</p>
    </Link>
  );
}

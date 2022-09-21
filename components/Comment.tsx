import { FC, Fragment } from "react";
import type { Comment } from "../utils/types";

interface CommentComponentProps {
  commentData: Comment;
}
const CommentComponent: FC<CommentComponentProps> = ({ commentData }) => {
  return (
    <Fragment>
      <h1>{commentData.name}</h1>
      <p>{commentData.description}</p>
    </Fragment>
  );
};

export default CommentComponent;

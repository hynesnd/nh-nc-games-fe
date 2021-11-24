import React from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../contexts/UserContext";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="comment-card">
      <p>Author: {comment.author}</p>
      <p>Date: {comment.created_at}</p>
      <p>{comment.body}</p>
      {comment.author === user.username ? (
        <button>Delete comment</button>
      ) : null}
      <button>Vote</button>
    </div>
  );
};

export default CommentCard;

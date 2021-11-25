import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../utils/api";
import VoteButtons from "../VoteButtons";

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id).then((res) => {
      setDeleted(true);
    });
  };

  if (isDeleted) {
    return <span>Comment deleted.</span>;
  } else {
    return (
      <div className="comment-card">
        <p>Author: {comment.author}</p>
        <p>Date: {comment.created_at}</p>
        <p>{comment.body}</p>
        {comment.author === user.username ? (
          <button onClick={() => handleDelete(comment.comment_id)}>
            Delete comment
          </button>
        ) : null}
        <VoteButtons
          voteType="comment"
          voteId={comment.comment_id}
          votes={comment.votes}
        />
      </div>
    );
  }
};

export default CommentCard;

import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p>Author: {comment.author}</p>
      <p>Date: {comment.created_at}</p>
      <p>{comment.body}</p>
      <button>Vote</button>
    </div>
  );
};

export default CommentCard;

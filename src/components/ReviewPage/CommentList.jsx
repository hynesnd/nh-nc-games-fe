import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getComments } from "../../utils/api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

const CommentList = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errSpan, setErrSpan] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setErrSpan(null);
    getComments(review_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsLoading(false);
          setErrSpan("No comments yet!");
        }
      });
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (errSpan) {
    return <span>{errSpan}</span>;
  } else {
    return (
      <div>
        <PostComment review_id={review_id} setComments={setComments} />
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </div>
    );
  }
};

export default CommentList;

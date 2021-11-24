import React from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import FullReview from "./FullReview";
import PostComment from "./PostComment";

const ReviewPage = () => {
  const { review_id } = useParams();

  return (
    <div>
      <FullReview review_id={review_id} />
      <PostComment review_id={review_id} />
      <CommentList review_id={review_id} />
    </div>
  );
};

export default ReviewPage;

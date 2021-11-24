import React from "react";
import CommentList from "./CommentList";
import FullReview from "./FullReview";
import PostComment from "./PostComment";

const ReviewPage = () => {
  return (
    <div>
      <FullReview />
      <PostComment />
      <CommentList />
    </div>
  );
};

export default ReviewPage;

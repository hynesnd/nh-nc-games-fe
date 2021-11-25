import React from "react";
import { Link } from "react-router-dom";
import VoteButtons from "../VoteButtons";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <Link to={`/reviews/${review.review_id}`}>
        <h3>{review.title}</h3>
      </Link>
      <h3>{review.category}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <p>{review.owner}</p>
      <p>comments: {review.comment_count}</p>
      <VoteButtons
        voteType="review"
        voteId={review.review_id}
        votes={review.votes}
      />
    </div>
  );
};

export default ReviewCard;

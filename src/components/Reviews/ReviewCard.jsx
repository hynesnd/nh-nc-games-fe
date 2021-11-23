import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3>{review.title}</h3>
      <h3>{review.category}</h3>
      <img src={review.review_img_url} alt={review.title} />
      <p>{review.owner}</p>
      <p>{review.comment_count}</p>
      <button>Vote</button>
    </div>
  );
};

export default ReviewCard;

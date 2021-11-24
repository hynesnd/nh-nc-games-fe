import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getSingleReview } from "../../utils/api";

const FullReview = ({ review_id }) => {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((review) => {
      setReview(review);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <span>Loading...</span>;
  } else {
    return (
      <div className="full-review">
        <h2>{review.title}</h2>
        <h3>{review.category}</h3>
        <img src={review.review_img_url} alt={review.title} />
        <p>Review author: {review.owner}</p>
        <p>Designer: {review.designer}</p>
        <p>{review.review_body}</p>
      </div>
    );
  }
};

export default FullReview;

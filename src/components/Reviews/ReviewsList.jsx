import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ currentCategory }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(currentCategory).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, [currentCategory]);

  return (
    <ul>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </ul>
  );
};

export default ReviewsList;

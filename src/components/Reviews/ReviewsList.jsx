import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ currentCategory, queries }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews(currentCategory, queries.sort_by, queries.order).then(
      (reviewsFromServer) => {
        setReviews(reviewsFromServer);
        setIsLoading(false);
      }
    );
  }, [currentCategory, queries]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else {
    return (
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    );
  }
};

export default ReviewsList;

import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ currentCategory }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviews(currentCategory).then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
      setIsLoading(false);
    });
  }, [currentCategory]);

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

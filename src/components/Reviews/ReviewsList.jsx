import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewsList = ({ currentCategory }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((reviewsFromServer) => {
      setReviews(reviewsFromServer);
    });
  }, []);

  return (
    <ul>
      {reviews.map((review) => {
        return <ReviewCard review={review} />;
      })}
    </ul>
  );
};

export default ReviewsList;

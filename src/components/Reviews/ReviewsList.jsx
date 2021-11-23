import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";

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
        return <li>{review.title}</li>;
      })}
    </ul>
  );
};

export default ReviewsList;

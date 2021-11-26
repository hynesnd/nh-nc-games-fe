import { useState, useEffect } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./ReviewCard";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  row-gap: 15px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const ReviewsList = ({ currentCategory, queries }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errSpan, setErrSpan] = useState(null);

  useEffect(() => {
    setErrSpan(false);
    setIsLoading(true);
    getReviews(currentCategory, queries.sort_by, queries.order)
      .then((reviewsFromServer) => {
        setReviews(reviewsFromServer);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setIsLoading(false);
          setErrSpan("Category not found.");
        }
      });
  }, [currentCategory, queries]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (errSpan) {
    return <span>{errSpan}</span>;
  } else {
    return (
      <List className="reviews-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </List>
    );
  }
};

export default ReviewsList;

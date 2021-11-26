import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { getSingleReview } from "../../utils/api";
import VoteButtons from "../VoteButtons";
import styled from "styled-components";

const ReviewContainer = styled.div`
  display: grid;
  width: 75%;
  margin: auto;
  grid-template-columns: auto;
  grid-template-rows: 150px 150px 100x 30px;
  grid-template-areas: "image" "text1" "text2" "vote";
  border-radius: 18px;
  border: solid 2px black;
  text-align: center;
  background: #feddbe;
  padding: 2px;
`;

const Text1wrapper = styled.div`
  grid-area: "text1";
  display: flex;
  flex-direction: column;
  column-cap: 10px;
  justify-content: center;
  align-items: center;
`;

const ImgWrapper = styled.div`
  grid-area: image;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  img {
    max-width: 100%;
    max-height: 100%;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }
`;

const Title = styled.h4`
  grid-area: "text1";
  color: #185adb;
  font-weight: bold;
`;

const StyledP = styled.p`
  padding: 5px;
  color: #0a1931;
  font-weight: bold;
`;

const Category = styled.h4`
  grid-area: "text1";
  color: #185adb;
  font-weight: bold;
`;

const FullReview = ({ review_id, setErrSpan }) => {
  const [review, setReview] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id)
      .then((review) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setErrSpan("Review not found.");
          setIsLoading(false);
        }
      });
  }, [review_id, setErrSpan]);

  if (isLoading) {
    return <span>Loading...</span>;
  } else {
    return (
      <ReviewContainer className="full-review">
        <ImgWrapper>
          <img src={review.review_img_url} alt={review.title} />
        </ImgWrapper>
        <Text1wrapper>
          <Title>{review.title}</Title>
          <Category>{review.category}</Category>
          <StyledP>Review author: {review.owner}</StyledP>
          <StyledP>Designer: {review.designer}</StyledP>
        </Text1wrapper>
        <StyledP>{review.review_body}</StyledP>
        <VoteButtons
          voteType="review"
          voteId={review.review_id}
          votes={review.votes}
        />
      </ReviewContainer>
    );
  }
};

export default FullReview;

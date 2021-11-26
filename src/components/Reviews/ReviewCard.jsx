import React from "react";
import { Link } from "react-router-dom";
import VoteButtons from "../VoteButtons";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  width: 300px;
  grid-template-columns: 300px;
  grid-template-rows: 210px 75px 50px 30px;
  grid-template-areas: "image" "text1" "text2" "vote";
  border-radius: 18px;
  border: solid 2px black;
  text-align: center;
  background: #feddbe;
  padding: 2px;
`;

const Image = styled.img`
  grid-area: image;
  max-width: 100%;
  max-height: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

const ImgWrapper = styled.div`
  grid-area: image;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
`;

const Text1wrapper = styled.div`
  grid-area: "text1";
  display: flex;
  flex-direction: column;
  column-cap: 10px;
  justify-content: center;
  align-items: center;
`;

const Text2wrapper = styled.div`
  grid-area: "text2";
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
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

const ReviewCard = ({ review }) => {
  return (
    <Card className="review-card">
      <ImgWrapper>
        <Image src={review.review_img_url} alt={review.title} />
      </ImgWrapper>
      <Text1wrapper>
        <StyledLink to={`/reviews/${review.review_id}`}>
          {review.title}
        </StyledLink>
        <Category className="category">{review.category}</Category>
      </Text1wrapper>
      <Text2wrapper>
        <StyledP className="owner">Author: {review.owner}</StyledP>
        <StyledP className="comment-count">
          Comments: {review.comment_count}
        </StyledP>
      </Text2wrapper>
      <VoteButtons
        voteType="review"
        voteId={review.review_id}
        votes={review.votes}
      />
    </Card>
  );
};

export default ReviewCard;

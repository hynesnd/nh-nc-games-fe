import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { deleteComment } from "../../utils/api";
import VoteButtons from "../VoteButtons";
import styled from "styled-components";

const Card = styled.div`
  display: grid;
  width: 75%;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 125px 40px;
  grid-template-areas: "top" "body" "bottom";
  border-radius: 18px;
  border: solid 2px black;
  text-align: center;
  background: #feddbe;
  padding: 2px;
  margin: auto;
`;
const TopWrapper = styled.div`
  grid-area: top;
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;
const BodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  backgound: #185adb;
`;

const BottomWrapper = styled.div`
  display: flex;
  grid-area: bottom;
  justify-content: center;
  padding: 2px;
`;

const StyledP = styled.p`
  padding: 5px;
  color: #0a1931;
  font-weight: bold;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0a1931;
  color: #0a1931;
  margin: 0 1em;
  padding: 0.25em 0.25em;
`;

const CommentCard = ({ comment }) => {
  const { user } = useContext(UserContext);
  const [isDeleted, setDeleted] = useState(false);

  const handleDelete = (comment_id) => {
    deleteComment(comment_id).then((res) => {
      setDeleted(true);
    });
  };

  if (isDeleted) {
    return <span>Comment deleted.</span>;
  } else {
    return (
      <Card className="comment-card">
        <TopWrapper>
          <StyledP>{comment.author}</StyledP>
          <StyledP>{comment.created_at}</StyledP>
        </TopWrapper>
        <BodyWrapper>
          <StyledP>{comment.body}</StyledP>
        </BodyWrapper>
        <BottomWrapper>
          {comment.author === user.username ? (
            <Button onClick={() => handleDelete(comment.comment_id)}>
              Delete comment
            </Button>
          ) : null}
          <VoteButtons
            voteType="comment"
            voteId={comment.comment_id}
            votes={comment.votes}
          />
        </BottomWrapper>
      </Card>
    );
  }
};

export default CommentCard;

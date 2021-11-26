import { useState, useContext } from "react";
import { patchCommentVotes, patchReviewVotes } from "../utils/api";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0a1931;
  color: #0a1931;
  margin: 0 1em;
  padding: 0.25em 0.25em;
`;

const StyledP = styled.p`
  padding: 2px;
  color: #0a1931;
  font-weight: bold;
  border: 2px solid #0a1931;
  border-radius: 3px;
`;

const Container = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VoteButtons = ({ voteType, voteId, votes }) => {
  const { isLoggedIn } = useContext(UserContext);
  const [addedVotes, setAddedVotes] = useState(0);

  const handleUpvote = () => {
    if (voteType === "comment") {
      setAddedVotes((prevVotes) => prevVotes + 1);
      patchCommentVotes(voteId, 1);
    }
    if (voteType === "review") {
      setAddedVotes((prevVotes) => prevVotes + 1);
      patchReviewVotes(voteId, 1);
    }
  };

  const handleDownvote = () => {
    if (voteType === "comment") {
      setAddedVotes((prevVotes) => prevVotes - 1);
      patchCommentVotes(voteId, -1);
    }
    if (voteType === "review") {
      setAddedVotes((prevVotes) => prevVotes - 1);
      patchReviewVotes(voteId, -1);
    }
  };

  return (
    <Container className="vote-buttons">
      <Button onClick={handleUpvote} disabled={!isLoggedIn}>
        ⬆️
      </Button>
      <StyledP>{votes + addedVotes}</StyledP>
      <Button onClick={handleDownvote} disabled={!isLoggedIn}>
        ⬇️
      </Button>
    </Container>
  );
};

export default VoteButtons;

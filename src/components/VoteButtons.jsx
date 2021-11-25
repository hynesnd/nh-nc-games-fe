import { useState } from "react";
import { patchCommentVotes, patchReviewVotes } from "../utils/api";

const VoteButtons = ({ voteType, voteId, votes }) => {
  const [voteCount, setVoteVount] = useState(votes);
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
    <div>
      <button onClick={handleUpvote}>⬆️</button>
      <p>{voteCount + addedVotes}</p>
      <button onClick={handleDownvote}>⬇️</button>
    </div>
  );
};

export default VoteButtons;

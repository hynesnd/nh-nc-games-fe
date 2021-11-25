import { useState } from "react";
import { patchCommentVotes } from "../utils/api";

const VoteButtons = ({ voteType, voteId, votes }) => {
  const [voteCount, setVoteVount] = useState(votes);
  const [addedVotes, setAddedVotes] = useState(0);

  const handleUpvote = () => {
    if (voteType === "comment") {
      setAddedVotes((prevVotes) => prevVotes + 1);
      patchCommentVotes(voteId, 1);
    }
  };

  const handleDownvote = () => {
    if (voteType === "comment") {
      console.log("in downvote");
      setAddedVotes((prevVotes) => prevVotes - 1);
      patchCommentVotes(voteId, -1);
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

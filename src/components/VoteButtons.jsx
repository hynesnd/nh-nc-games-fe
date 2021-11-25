import { useState, useContext } from "react";
import { patchCommentVotes, patchReviewVotes } from "../utils/api";
import { UserContext } from "../contexts/UserContext";

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
    <div className="vote-buttons">
      <button onClick={handleUpvote} disabled={!isLoggedIn}>
        ⬆️
      </button>
      <p>{votes + addedVotes}</p>
      <button onClick={handleDownvote} disabled={!isLoggedIn}>
        ⬇️
      </button>
    </div>
  );
};

export default VoteButtons;

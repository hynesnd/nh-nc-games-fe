import { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../utils/api";

const PostComment = ({ review_id, setComments }) => {
  const [commentInput, setCommentInput] = useState();
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          postComment(review_id, user.username, commentInput).then(
            (newComment) => {
              setComments((prevState) => {
                const newState = [newComment, ...prevState];
                return newState;
              });
            }
          );
        }}
      >
        <textarea
          placeholder="comment"
          rows="4"
          required
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
        ></textarea>{" "}
        <br />
        <input type="submit" value="Post comment" disabled={!isLoggedIn} />
      </form>
    </div>
  );
};

export default PostComment;

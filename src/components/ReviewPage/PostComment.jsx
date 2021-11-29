import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { postComment } from "../../utils/api";
import styled from "styled-components";

const PostContainer = styled.div`
  display: flex;
  width: 65%;
  margin: auto;
  background: #feddbe;
  padding: 2px;
  border-radius: 18px;
  border: solid 2px black;
  align-items: center;
  justify-content: center;
`;

const TextArea = styled.textarea`
  background: transparent;
  width: 100%;
  margin: auto;
  resize: none;
  color: #0a1931;
  font-size: 1em;
  border: 2px solid #0a1931;
  border-radius: 3px;
`;

const Button = styled.input`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0a1931;
  color: #0a1931;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const PostComment = ({ review_id, setComments }) => {
  const [commentInput, setCommentInput] = useState();
  const { user, isLoggedIn } = useContext(UserContext);

  return (
    <PostContainer className="post-comment">
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
        <TextArea
          placeholder="comment"
          rows="4"
          required
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
        ></TextArea>{" "}
        <br />
        <Button type="submit" value="Post comment" disabled={!isLoggedIn} />
      </form>
    </PostContainer>
  );
};

export default PostComment;

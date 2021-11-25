import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import FullReview from "./FullReview";

const ReviewPage = () => {
  const { review_id } = useParams();
  const [errSpan, setErrSpan] = useState(null);

  if (errSpan) {
    return <span>{errSpan}</span>;
  } else {
    return (
      <div>
        <FullReview review_id={review_id} setErrSpan={setErrSpan} />
        <CommentList review_id={review_id} />
      </div>
    );
  }
};

export default ReviewPage;

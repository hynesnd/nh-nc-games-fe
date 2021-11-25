import { useState } from "react";
import { useParams } from "react-router";
import QuerySelector from "./QuerySelector";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  const { slug } = useParams();
  const [queries, setQueries] = useState({
    sort_by: undefined,
    order: undefined,
  });

  return (
    <div className="reviews">
      <QuerySelector setQueries={setQueries} />
      <ReviewsList currentCategory={slug} queries={queries} />
    </div>
  );
};

export default Reviews;

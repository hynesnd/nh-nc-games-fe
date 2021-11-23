import { useState } from "react";
import CatSelector from "./CatSelector";
import ReviewsList from "./ReviewsList";

const Reviews = () => {
  const [currentCategory, setCurrentCategory] = useState("");

  return (
    <div>
      <CatSelector setCurrentCategory={setCurrentCategory} />
      <ReviewsList currentCategory={currentCategory} />
    </div>
  );
};

export default Reviews;

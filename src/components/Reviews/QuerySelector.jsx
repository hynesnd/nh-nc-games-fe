import { useState, useEffect } from "react";

const QuerySelector = ({ setQueries }) => {
  const [ascDesc, setAscDesc] = useState("desc");

  const handleSortBy = (value) => {
    setQueries((prevState) => {
      const newState = { ...prevState };
      newState.sort_by = value;
      return newState;
    });
  };

  const handleOrder = () => {
    setAscDesc((prevOrder) => {
      if (prevOrder === "desc") {
        return "asc";
      } else {
        return "desc";
      }
    });
    setQueries((prevState) => {
      const newState = { ...prevState };
      newState.order = ascDesc;
      return newState;
    });
  };
  return (
    <div>
      Sort by:{" "}
      <select onChange={(event) => handleSortBy(event.target.value)}>
        <option value="created_at">Created at</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button onClick={handleOrder}>{ascDesc}</button>
    </div>
  );
};

export default QuerySelector;

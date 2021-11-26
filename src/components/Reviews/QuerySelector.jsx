import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fddc1e;
  color: #fddc1e;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Select = styled.select`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #fddc1e;
  color: #fddc1e;
  margin: 0 1em;
  padding: 0.25em 1em;

  option {
    background: transparent;
    color: #fddc1e;
    display: flex;
  }
`;

const Container = styled.div`
  background: #0a1931;
  color: #fddc1e;

  padding: 0.25em 1em;
`;

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
    <Container className="query-selector">
      Sort by:{" "}
      <Select onChange={(event) => handleSortBy(event.target.value)}>
        <option value="created_at">Created at</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </Select>
      <Button onClick={handleOrder}>{ascDesc}</Button>
    </Container>
  );
};

export default QuerySelector;

import styled from "styled-components";

const StyledHeader = styled.header`
  background: #0a1931;
  color: #ffc947;

  padding: 0.25em 1em;
`;

const Header = ({ text, styling }) => {
  return (
    <StyledHeader className={styling}>
      <h1>{text}</h1>
    </StyledHeader>
  );
};

export default Header;

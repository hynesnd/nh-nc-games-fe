import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";
import styled from "styled-components";

const Nav = styled.div`
  background: #185adb;
  color: #ffc947;

  padding: 0.25em 1em;
`;

const StyledLink = styled(Link)`
  color: #ffc947;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;

const LoginLink = styled(StyledLink)`
  color: #f78b11;
`;

const NavBar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategoryList(categoriesFromApi);
    });
  }, []);

  return (
    <Nav className="nav-bar">
      <StyledLink to="/">All Reviews</StyledLink>
      {categoryList.map((category) => {
        return (
          <StyledLink key={category.slug} to={`/categories/${category.slug}`}>
            {category.slug}
          </StyledLink>
        );
      })}
      <LoginLink to="/login">Login</LoginLink>
    </Nav>
  );
};

export default NavBar;

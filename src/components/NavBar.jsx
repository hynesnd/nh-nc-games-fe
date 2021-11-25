import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const NavBar = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategoryList(categoriesFromApi);
    });
  }, []);

  return (
    <nav className="nav-bar">
      <Link to="/">All Reviews</Link>
      {categoryList.map((category) => {
        return (
          <Link key={category.slug} to={`/categories/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default NavBar;

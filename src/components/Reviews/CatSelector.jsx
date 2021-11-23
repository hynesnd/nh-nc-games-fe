import { useState, useEffect } from "react";
import { getCategories } from "../../utils/api";

const CatSelector = ({ setCurrentCategory }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategoryList(categoriesFromApi);
    });
  }, []);

  return (
    <div>
      <select onChange={(event) => setCurrentCategory(event.target.value)}>
        <option selected value="all">
          All
        </option>
        {categoryList.map((category) => {
          return <option value={category.slug}>{category.slug}</option>;
        })}
      </select>
    </div>
  );
};

export default CatSelector;

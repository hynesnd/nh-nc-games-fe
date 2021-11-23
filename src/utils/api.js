import axios from "axios";

const ncGames = axios.create({
  baseURL: "https://nh-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return ncGames.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (currentCategory) => {
  let path = "/reviews";

  if (currentCategory !== "All") path += `?category=${currentCategory}`;

  return ncGames.get(path).then((res) => {
    return res.data.reviews;
  });
};

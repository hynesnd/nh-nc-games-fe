import axios from "axios";

const ncGames = axios.create({
  baseURL: "https://nh-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return ncGames.get("/categories").then((res) => {
    return res.data.categories;
  });
};

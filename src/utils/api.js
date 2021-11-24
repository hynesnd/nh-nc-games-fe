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

export const getSingleReview = (review_id) => {
  return ncGames.get(`reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getUser = (username) => {
  return ncGames.get(`/users/${username}`).then((res) => {
    return res.data.user;
  });
};

export const getComments = (review_id) => {
  return ncGames.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

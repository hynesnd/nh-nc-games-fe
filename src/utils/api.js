import axios from "axios";

const ncGames = axios.create({
  baseURL: "https://nh-nc-games.herokuapp.com/api",
});

export const getCategories = () => {
  return ncGames.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getReviews = (category, sort_by, order) => {
  return ncGames
    .get("/reviews", {
      params: { category: category, sort_by: sort_by, order: order },
    })
    .then((res) => {
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

export const postComment = (review_id, username, body) => {
  return ncGames
    .post(`/reviews/${review_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteComment = (comment_id) => {
  return ncGames.delete(`comments/${comment_id}`).then((res) => {
    return res;
  });
};

export const patchCommentVotes = (comment_id, vote) => {
  return ncGames
    .patch(`comments/${comment_id}`, { inc_votes: vote })
    .then((res) => {
      return res.data.comment;
    });
};

export const patchReviewVotes = (review_id, votes) => {
  return ncGames
    .patch(`reviews/${review_id}`, { inc_votes: votes })
    .then((res) => {
      return res.data.review;
    });
};

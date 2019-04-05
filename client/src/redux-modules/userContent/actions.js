import types from './types.js';

export const startReview = () => ({
  type: types.USER_REVIEW_START
});

export const starsSelect = (starCount) => ({
  type: types.USER_STARS_SELECT,
  starCount,
});

export const hoverStars = (starCount) =>({
  type: types.USER_STARS_HOVER,
  starCount,
})

export const clearStars = () => ({
  type: types.USER_STARS_CLEAR,
})

export const postReview = (reviewObj) => ({
  type: types.USER_REVIEW_POST,
  reviewObj,
});

export const posrError = (error) => ({
  type: types.USER_REVIEW_ERROR,
  error,
})

export const cancelReview = () => ({
  type: types.USER_REVIEW_CANCEL,
});

export const addReview = (userReview) => ({
  type: types.USER_REVIEW_ADD,
  userReview,
})

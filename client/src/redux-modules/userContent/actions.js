import types from './types.js';

export const startReview = () => ({
  type: types.USER_REVIEW_START
});

export const starsSelect = (starCount) => ({
  type: types.USER_STARS_SELECT,
  starCount,
});

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

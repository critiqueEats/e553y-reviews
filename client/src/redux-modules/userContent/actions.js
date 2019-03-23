import types from './types.js';

export const startReview = () => ({type: types.USER_REVIEW_START});
export const starsSelect = (starCount) => ({
  type: types.USER_STARS_SELECT,
  starCount,
});

export const finishReview = (cancelled, reviewObj) => ({
  type: types.USER_REVIEW_FINISH,
  cancelled,
  reviewObj,
});

export const addReview = (userReview) => ({
  type: types.USER_REVIEW_ADD,
  userReview,
})

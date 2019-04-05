export const selectUserStarCount = ({userContent}) => {
  const {starCount} = userContent;
  return starCount;
}

export const selectUserReview = ({userContent}) => {
  const {userReview} = userContent;
  return userReview;
}
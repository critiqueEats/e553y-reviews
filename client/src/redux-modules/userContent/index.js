import types from './types.js';

const initialState = {
  starCount: 0,
  userReview: null,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.USER_REVIEW_ADD:
      return Object.assign({}, state, {userReview: action.userReview});
    
    case types.USER_STARS_SELECT:
      return Object.assign({}, state, {starCount: action.starCount});

    case types.USER_STARS_CLEAR:
      return Object.assign({}, state, {starCount: null});
      
    default: 
      return state;
  }

};

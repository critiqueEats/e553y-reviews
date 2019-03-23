import types from './types.js';

export const updateReviews = function(reviews) {
  return {
    type: types.REVIEWS_UPDATE,
    reviews,
  }
}

export const fetchReviews = function() {
  return {
    type: types.REVIEWS_FETCH,
     
  }
}

export const fetchReviewsSorted = function(sortBy){
  return {
    type: types.REVIEWS_FETCH_SORTED,
    sortBy,
  }
}

export const fetchSearch = function(searchTerm) {
  return {
    type: types.REVIEWS_FETCH_SEARCH,
    searchTerm,
  }
}

export const setLanguage = function(selectedLanguage) {
  return {
    type: types.REVIEWS_SET_LANGUAGE,
    selectedLanguage,
  }
}

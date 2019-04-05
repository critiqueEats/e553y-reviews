import types from './types.js';

export const updateReviews = function(reviews) {
  return {
    type: types.REVIEWS_UPDATE,
    reviews,
  }
}

export const updateReviewsError = function(error) {
  return {
    type: types.REVIEWS_UPDATE_ERROR,
    error,
  }
}

export const fetchReviews = function() {
  return {
    type: types.REVIEWS_FETCH_SORTED,
    sortOptionIdx: 0,
  }
}

export const fetchReviewsSorted = function(sortOptionIdx){
  return {
    type: types.REVIEWS_FETCH_SORTED,
    sortOptionIdx,
  }
}

export const fetchSearch = function(searchTerm) {
  return {
    type: types.REVIEWS_FETCH_SEARCH,
    searchTerm,
  }
}

export const setSearchedTerm = function(searchedTerm) {
  return {
    type: types.REVIEWS_SEARCHEDTERM_SET,
    searchedTerm
  }
}

export const clearSearchedTerm = function() {
  return {
    type: types.REVIEWS_SEARCHEDTERM_CLEAR,
  }
}

export const setLanguage = function(selectedLanguage) {
  return {
    type: types.REVIEWS_SET_LANGUAGE,
    selectedLanguage,
  }
}

export const setSort = function(sortOptionIdx) {
  return {
    type: types.REVIEWS_SORT_SET,
    sortOptionIdx,
  }
} 


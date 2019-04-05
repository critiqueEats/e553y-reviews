import types from './types.js';

export const setDefault = function() {
  return {
    type: types.MODE_DEFAULT
  }
}

export const setLoading = function(){
  return {
    type: types.MODE_LOADING,
  }
}

export const setAddingReview = function() {
  return {
    type: types.MODE_ADDING_REVIEW
  }
}

export const setSearching = function() {
  return {
    type: types.MODE_SEARCHING
  }
}

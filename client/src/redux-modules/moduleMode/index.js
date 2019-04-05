import types from './types.js';

const initialState = {
  loading: false,
  addingReview: false,
  searchMode: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.MODE_DEFAULT:
      return Object.assign({},state, {loading:false, addingReview: false, searchMode:false})

    case types.MODE_LOADING:
      return Object.assign({},state, {loading: true })
    
    case types.MODE_SEARCHING:
      return Object.assign({},state, {searchMode: true, loading:false, addingReview: false })
    
    case types.MODE_ADDING_REVIEW:
      return Object.assign({},state, {addingReview: true, loading:false, searchMode:false})
    default: 
      return state;   
  }
};

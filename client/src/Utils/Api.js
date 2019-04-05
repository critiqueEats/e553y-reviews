import Axios from 'axios';

const HOST = 'http://127.0.0.1:5002/';



export const fetchReviews = function (options) {
  const {sortBy} = options;
  //throw error if restaurantId is not set
  if (!global.restaurantId) throw new Error('restaurantId not set');

  return Axios.get(HOST + global.restaurantId + '/reviews', {params:{sortBy}})
    .then(response => ({reviews: response.data}))
    .catch(error => { error });
}

export const searchReviews = function (query) {
  //throw error if restaurantId is not set
  if (!global.restaurantId) throw new Error('restaurantId not set');

  return Axios.post(HOST + global.restaurantId + '/search', { query })
    .then(response => ({reviews: response.data}))
    .catch(error => { error })
}

export const postReview = function(reviewObj) {
  //throw error if restaurantId is not set
  if (!global.restaurantId) throw new Error('restaurantId not set');

  return Axios.post(HOST + global.restaurantId + '/reviews', reviewObj)
    .then(response => ({userReview: response.data}))
    .catch(error => {error})
}
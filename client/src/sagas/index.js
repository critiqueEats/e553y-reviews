import "regenerator-runtime/runtime";
import {all, call} from 'redux-saga/effects';
import {requestReviews, requestSearchReviews} from '../redux-modules/reviewsData/sagas.js';
import {addReviewFlow} from '../redux-modules/userContent/sagas.js'

const rootSaga = function* () {
  yield all([
    call(addReviewFlow),
    call(requestReviews),
    call(requestSearchReviews)       
  ]);
}

export default rootSaga;
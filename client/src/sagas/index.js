import "regenerator-runtime/runtime";
import {all, call} from 'redux-saga/effects';
import {reviewsSaga} from '../redux-modules/reviewsData/sagas.js';
import {addReviewFlow} from '../redux-modules/userContent/sagas.js'

const rootSaga = function* () {
  yield all([
    call(reviewsSaga),
    call(addReviewFlow)
  ]);
}

export default rootSaga;
import "regenerator-runtime/runtime";
import {all, call} from 'redux-saga/effects';
import {reviewsSaga} from '../redux-modules/reviewsData/sagas.js';

const rootSaga = function* () {
  yield all([
    call(reviewsSaga)
  ]);
}

export default rootSaga;
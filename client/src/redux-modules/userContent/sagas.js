import "regenerator-runtime/runtime";
import { fork, take, put, cancel, call } from 'redux-saga/effects';
import types from './types';
import { setDefault, setAddingReview } from '../moduleMode/actions';
import {addReview, clearStars } from './actions';
import {postReview} from '../../Utils/Api.js';

const postFlow = function* () {
  const {reviewObj} = yield take(types.USER_REVIEW_POST);
  try{
    const {userReview, error} = yield call(postReview, reviewObj);
    if(error) {
      throw error;
    }
    yield put(addReview(userReview));

  }catch(error){
    console.error(error);
    yield put(postError(error));
  }
}

export const addReviewFlow = function* () {
  while (true) {
    yield take([types.USER_REVIEW_START, types.USER_STARS_SELECT]);
    
    yield put(setAddingReview());
    let postTask = yield fork(postFlow);
    let nextAction = yield take([types.USER_REVIEW_ADD, types.USER_REVIEW_CANCEL, types.USER_REVIEW_ERROR]);

    if(nextAction.type === types.USER_REVIEW_CANCEL){
      //cancel post Task if still in progress 
      yield put(clearStars());
      yield cancel(postTask);
    }
    
    yield put(setDefault());   
  }
}

//TODO: handle vote flow 
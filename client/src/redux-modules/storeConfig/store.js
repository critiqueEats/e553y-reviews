const { createStore, combineReducers, applyMiddleware, compose} = require('redux');
import createSagaMiddleware from 'redux-saga';
import mode from '../moduleMode';
import reviewsData from '../reviewsData';
import userContent from '../userContent';
import rootSaga from '../../sagas';

const rootReducer = combineReducers({
  mode, 
  reviewsData,
  userContent,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  
  );
sagaMiddleware.run(rootSaga)
module.exports = store;

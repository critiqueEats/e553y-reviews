const { createStore, combineReducers, applyMiddleware } = require('redux');
import mode from '../moduleMode';
import reviewsData from '../reviewsData';
import userContent from '../userContent';
console.log(mode)
const rootReducer = combineReducers({
  mode, 
  reviewsData,
  userContent,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

module.exports = store;

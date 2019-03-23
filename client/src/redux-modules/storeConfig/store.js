const { createStore, combineReducers, applyMiddleware } = require('redux');
import mode from '../moduleMode';
console.log(mode)
const rootReducer = combineReducers({mode});

const store = createStore(rootReducer);

module.exports = store;

const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const store = require('./redux-modules/storeConfig/store.js');



import ReviewListContainer from './components/ReviewList/ReviewListContainer.jsx';

const Reviews = ({restaurantId}) => {
  global.restaurantId = restaurantId;
  return (
    <Provider store={store} >
      <ReviewListContainer />
    </Provider>
  );
};

global.Reviews = Reviews;
global.React = React;
global.ReactDOM = ReactDOM;

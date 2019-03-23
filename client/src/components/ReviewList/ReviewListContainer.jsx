import React from 'react';
import { connect } from 'react-redux';
import ReviewList from './ReviewList.jsx';
import * as selectors from '../../redux-modules/moduleMode/selectors.js';

const mapStateToProps = (state) => ({
  loading: selectors.selectLoading(state),
  searchMode: selectors.selectSearchMode(state),
  addingReview: selectors.selectAddingReview(state),
});

const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
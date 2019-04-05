import { connect } from 'react-redux';
import ReviewList from './ReviewList.jsx';
import { fetchReviews} from '../../redux-modules/reviewsData/actions.js';
import { selectReviews } from '../../redux-modules/reviewsData/selectors.js';
import { selectAddingReview } from '../../redux-modules/moduleMode/selectors.js';

const mapStateToProps = (state) => ({
  reviews: selectReviews(state),
  addingReview: selectAddingReview(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchReviews: () => dispatch(fetchReviews()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
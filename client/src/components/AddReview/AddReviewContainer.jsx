import { connect } from 'react-redux';
import { selectUserStarCount } from '../../redux-modules/userContent/selectors';
import { cancelReview, postReview } from '../../redux-modules/userContent/actions';
import AddReview from './AddReview.jsx';

const mapStateToProps = (state) => ({
  userStarCount: selectUserStarCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewPost: (cancelled, reviewObj) => {
    if(cancelled) {
      dispatch(cancelReview());
    } else {
      dispatch(postReview(reviewObj));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
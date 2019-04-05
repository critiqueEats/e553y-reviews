import {connect} from 'react-redux';
import { selectUserReview } from '../../redux-modules/userContent/selectors';
import { startReview } from '../../redux-modules/userContent/actions';
import UserReview from './UserReview.jsx';

const mapStateToProps = (state) =>({
  userReview: selectUserReview(state)
})

const mapDispatchToProps = (dispatch) => ({
  onStartReview: () => dispatch(startReview())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserReview);
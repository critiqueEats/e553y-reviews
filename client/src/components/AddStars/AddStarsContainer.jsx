import {connect} from 'react-redux';
import { selectUserStarCount } from '../../redux-modules/userContent/selectors';
import { starsSelect, startReview } from '../../redux-modules/userContent/actions';
import AddStars from './AddStars.jsx';

const mapStateToProps = (state, {mode}) => ({
  defaultStars: selectUserStarCount(state),
  mode,
});

const mapDispatchToProps = (dispatch) => ({
  onStarClick: (starCount) => dispatch(starsSelect(starCount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddStars);
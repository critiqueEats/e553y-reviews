import {connect} from 'react-redux';
import {selectSearchMode} from '../../redux-modules/moduleMode/selectors.js';
import { selectReviews, getSearchedTerm, selectSortOpitons, selectLanguagesCount } from '../../redux-modules/reviewsData/selectors.js';
import { fetchReviews, setLanguage, fetchReviewsSorted } from '../../redux-modules/reviewsData/actions.js';
import ReviewsControl from './ReviewsControl.jsx';



const mapStateToProps = (state) => ({
  searchMode: selectSearchMode(state),
  reviewsCount: selectReviews(state).length,
  searchedTerm: getSearchedTerm(state),
  sortOptions: selectSortOpitons(state),
  languages_count: selectLanguagesCount(state),  
})

const mapDispatchToProps = (dispatch) => ({
  onClearSearch: () => dispatch(fetchReviews()),
  onLanguageChange: (selectedLanguage) => dispatch(setLanguage(selectedLanguage)),
  onSortOptionChange: (sortTypeIdx) => dispatch(fetchReviewsSorted(sortTypeIdx)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsControl);
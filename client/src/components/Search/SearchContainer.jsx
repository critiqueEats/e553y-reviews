import { connect } from 'react-redux';
import { fetchSearch } from '../../redux-modules/reviewsData/actions';
import Search from './Search.jsx';

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchTerm) => dispatch(fetchSearch(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
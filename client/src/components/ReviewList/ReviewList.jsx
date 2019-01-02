import React from 'react';
import ReviewListItem from '../ReviewListItem/ReviewListItem.jsx';
import AddStars from '../AddStars/AddStars.jsx';
import Icon from '../Icon/Icon.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import Search from '../Search/Search.jsx';
import AddReview from '../AddReview/AddReview.jsx';
import styles from './styles.css';
import Axios from 'axios';


class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            searchMode: false,
            searchedTerm: null,
            selectedLanguage: [0],
            userStarCount: null,
            addingReview: false,
            reviewDone: false,
        }

        this.reviewsByLanguage = {English: []};
        this.languages_count = ["English (0)"];       
        this.languages = ["English"]
        this.sortOptions = [
            "Lorem Yelpsum Sort", 
            "Newest First",
            "Older First",
            "Highest Rated", 
            "Lowest Rated", 
            "Elites"
        ];
        
        this.restaurantId = this.props.restaurantId,
        this.postedReview = null;
       
        this.onSearch = this.onSearch.bind(this);
        this.onClearSearch = this.onClearSearch.bind(this);
        this.onSortOptionChange = this.onSortOptionChange.bind(this);
        this.onLanguageChange = this.onLanguageChange.bind(this);
        this.catagorizeReviews = this.catagorizeReviews.bind(this);
        this.onReviewPost = this.onReviewPost.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
        this.startReview = this.startReview.bind(this);
    }
    
    componentDidMount() {
        Axios.get('/' + this.restaurantId + '/reviews')
            .then(response =>  response.data).then(this.catagorizeReviews)
            .catch(error => console.error(error))
            //always gets run
            .then(()=> this.setState({loading: false}))
    }

    catagorizeReviews(reviews) {
        //reset buckets
        this.languages = ["English"];
        this.reviewsByLanguage = {English: []};
        
        reviews.forEach(review => {
            let language = review.language;
            if(!this.languages.includes(language)) {                
                this.languages.push(language);
                this.reviewsByLanguage[language] = [];
            }

            this.reviewsByLanguage[language].push(review);
        });
        //display review-count for each language
        this.languages_count = this.languages.map(language => (
            `${language} (${this.reviewsByLanguage[language].length})`
            )
        )

        //set-up English reviews to be rendered by default
        this.reviews = this.reviewsByLanguage["English"];
        return reviews;
    }

    onSearch(query) {
        this.setState({
            searchedTerm: query,
            loading: true,
            searchMode: true
        })
        Axios.post('/' + this.restaurantId + '/search',{query: query})
            .then(response => this.reviews = response.data)
            .catch(error => console.error(error))
            .then(()=> this.setState({loading: false}))
    }

    onClearSearch() {
        this.setState({
            searchMode: false,
            searchedTerm: null
        })
        Axios.get('/' + this.restaurantId + '/reviews')
        .then(response => response.data).then(this.catagorizeReviews)
        .catch(error => console.error(error))
        //always gets run
        .then(()=> this.setState({loading: false}))
    }

    onSortOptionChange(sortTypeIdx) {
        const allowedParams = ['', '-date', 'date', '-stars', 'stars', 'elites'];
        const sortBy = allowedParams[sortTypeIdx];

        Axios.get('/' + this.restaurantId + '/reviews/?sortBy=' + sortBy)
            .then(response => this.reviews = response.data)
            .catch(error => console.error(error))
            .then(()=> this.setState({loading: false}))
    }

    onLanguageChange (selectedIdx) {
        this.setState({loading: true},() => {
            const selectedLanguage = this.languages[selectedIdx];
            this.reviews = this.reviewsByLanguage[selectedLanguage];
            this.setState({loading: false});
        });
    }

    onStarClick(starCount) {
        this.setState({
            userStarCount: starCount, 
            addingReview: true
        });
    }

    startReview () {
        this.setState({addingReview: true});
    } 

    onReviewPost (cancelled, reviewObj) {
        //if add review modal is cancelled 
        if(cancelled) {
            return this.setState({addingReview: false});
        }

        Axios.post('/' + this.restaurantId + '/reviews', reviewObj)
            .then(response => response.data).then(review => {
                this.postedReview = review;
                this.setState({reviewDone: true});
            })
            .catch(error => console.log(error))
            .then(()=> this.setState({addingReview: false}))
    }
    
    render() {
        return (
            <div className={styles.container}>
                <li className={styles.reviewsHeader}>
                    <p className={styles.headerLabel}>Recommended Reviews</p>
                    
                    <form className={styles.headerForm} onSubmit={(e)=> e.preventDefault()} id="reviewsControl">
                        {this.state.searchMode ? 
                            <p className={styles.searchResultText}>
                                {`${this.reviews.length} reviews mentioning “${this.state.searchedTerm}”`}
                            </p>
                            :''
                        }
                        {this.state.searchMode ? 
                            <button className={styles.clearSearchButton} onClick={this.onClearSearch}>
                            Clear results
                                <Icon name="close_small" height="14" width="14" fill="#666" />
                            </button>
                            :''
                        }
                        <span className={styles.searchbarWrapper}>    
                            <Search onSearch={this.onSearch} />
                        </span>
                        {this.state.searchMode ? '':
                        <span className={styles.dropdownWrapper}>
                            <Dropdown label="Sort By" options={this.sortOptions} selectedIdx={0} onSelectionChange={this.onSortOptionChange} />
                        </span>
                        }
                        {this.state.searchMode ? '':
                        <span className={styles.dropdownWrapper}>
                            <Dropdown label="Language" options={this.languages_count} selectedIdx={0} onSelectionChange={this.onLanguageChange} />
                        </span>
                        }
                    </form>
                </li>
                {this.state.addingReview ? <AddReview stars={this.state.userStarCount} onReviewPost={this.onReviewPost}/> :
                this.state.reviewDone ? 
                    <li> <ReviewListItem review={this.postedReview} />  </li>        
                :
                <li className={styles.composeReview}>
                    <div className={styles.composeReviewSidePanel}>
                        <img src="https://s3.amazonaws.com/lorem-yelpsum-photos/icons/empty_profile.png" alt="empty profile" />
                    </div>
                    <div className={styles.composeReviewBody}>
                        <div className={styles.composeReviewIsland}>
                            <div className={styles.starsWrapper}>
                                <AddStars onStarClick={this.onStarClick}/>
                            </div>
                            <div className={styles.linkWrapper}>
                                <a href="javascript:;" className={styles.startReviewLink} onClick={this.startReview}>Start your review</a>
                            </div>
                        </div>
                    </div>
                </li>
                }
                {this.state.loading ? 
                (
                    <div> Loading </div>
                ):(
                    this.reviews.map(review =>(
                        <li className={styles.reviewItem}>
                            <ReviewListItem review={review} reviewId={review._id} key={review._id} />
                        </li>
                    ))
                )}                
            </div>
        )
    }

}

export default ReviewList;
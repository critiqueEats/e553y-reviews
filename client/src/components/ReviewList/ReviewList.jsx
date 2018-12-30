import React from 'react';
import ReviewListItem from '../ReviewListItem/ReviewListItem.jsx';
import AddStars from '../AddStars/AddStars.jsx';
import Icon from '../Icon/Icon.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import styles from './styles.css';
import Axios from 'axios';


class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantId: this.props.restaurantId,
            loading: true,
            searchTerm: null,
            selectedLanguage: [0]

        }

        this.sortOptions = [
            "Lorem Yelpsum Sort", 
            "Newest First",
            "Older First",
            "Highest Rated", 
            "Lowest Rated", 
            "Elites"
        ];
        this.languages = ["English"]
        this.reviews = [];
        this.fetchReviews()
    }
    
    fetchReviews() {
        const reviewList = this;
        Axios.get('http://127.0.0.1:5002/1/reviews')
            .then(response =>  reviewList.reviews = response.data)
            .catch(error => console.error(error))
            //always gets run
            .then(()=> reviewList.setState({loading: false}))
    }

    onSeachbarChange() {
    }

    onSearchClick() {

    }
    onSortOptionChange() {
        console.log("hey")
    }
    onLanguageChange () {
        
    }
    render() {
        return (
            <div className={styles.container}>
                <li className={styles.reviewsHeader}>
                    <p className={styles.headerLabel}>Recomended Reviews</p>
                    <form className={styles.headerForm}  onSubmit={this.onSearchClick.bind(this)} id="reviewsControl">
                        <span className={styles.searchbarWrapper}>    
                            <input type="text" className={styles.searchbar} onChange={this.onSeachbarChange.bind(this)} placeholder="Search within the reviews"></input>
                            <button className={styles.searchButton} type="submit">
                            <Icon name="search_small" size="small" fill="#FFF" />
                            </button>
                        </span>
                        <span className={styles.dropdownWrapper}>
                            <Dropdown label="Sort By" options={this.sortOptions} selectedIdx={0} onSelectionChange={this.onSortOptionChange.bind(this)} />
                        </span>
                        <span className={styles.dropdownWrapper}>
                            <Dropdown label="Language" options={this.languages} selectedIdx={0} onSelectionChange={this.onLanguageChange.bind(this)} />
                        </span>
                    </form>
                </li>
                <li className={styles.composeReview}>
                    <div className={styles.composeReviewSidePanel}>
                        <img src="https://s3.amazonaws.com/lorem-yelpsum-photos/icons/empty_profile.png" alt="empty profile" />
                    </div>
                    <div className={styles.composeReviewBody}>
                        <div className={styles.composeReviewIsland}>
                            <div className={styles.starsWrapper}>
                                <AddStars />
                            </div>
                            <div className={styles.linkWrapper}>
                                <a href="javascript:;" className={styles.startReviewLink}>Start your review</a>
                            </div>
                        </div>
                    </div>
                </li>
                {this.state.loading ? 
                (
                    <div> Loading </div>
                ):(
                    this.reviews.map(review =>(
                        <li className={styles.reviewItem}>
                            <ReviewListItem review={review} key={review._id} />
                        </li>
                    ))
                )}
            </div>
        )
    }

}

export default ReviewList;
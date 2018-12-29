import React from 'react';
import ReviewListItem from '../ReviewListItem/ReviewListItem.jsx';
import AddStars from '../AddStars/AddStars.jsx';
import styles from './styles.css';
import Axios from 'axios';

class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.reviews = [];
        this.state = {
            restaurantId: this.props.restaurantId,
            loading: true
        }
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
    render() {
        return (
            <div className={styles.container}>
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
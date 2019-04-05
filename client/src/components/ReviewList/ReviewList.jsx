import React from 'react';
import ReviewListItem from '../ReviewListItem/ReviewListItem.jsx';
import styles from './styles.css';
import UserReviewContainer from '../UserReview/UserReviewContainer.jsx';
import ReviewsControlContainer from '../ReviewsControl/ReviewsControlContainer.jsx';
import AddReviewContainer from '../AddReview/AddReviewContainer.jsx';


class ReviewList extends React.Component {
    
    componentDidMount() {
       this.props.fetchReviews();
    }
    
    renderAddReview(isAddingReview) {
        if(isAddingReview) {
            return (
               <AddReviewContainer />
            )
        }
        return (
            <li>
                <UserReviewContainer />
            </li>)
    }

    render() {
        return (
            <div className={styles.container}>
                <li>
                    <ReviewsControlContainer/>
                </li>
                {this.renderAddReview(this.props.addingReview)}
                        
                {this.props.loading ? 
                (
                    <div> Loading </div>
                ):(
                    this.props.reviews.map(review =>(
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
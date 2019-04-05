import AddStarsContainer from '../AddStars/AddStarsContainer.jsx';
import ReviewListItem from '../ReviewListItem/ReviewListItem.jsx';
import styles from './styles.css';


const UserReview = ({userReview, onStartReview}) => {

  if(userReview) {
    return (
      <ReviewListItem review={userReview} />
    )
  }
  
  return (
    <div className={styles.composeReview}>
      <div className={styles.composeReviewSidePanel}>
          <img src="https://s3.amazonaws.com/lorem-yelpsum-photos/icons/empty_profile.png" alt="empty profile" />
      </div>
      <div className={styles.composeReviewBody}>
          <div className={styles.composeReviewIsland}>
              <div className={styles.starsWrapper}>
                  <AddStarsContainer />
              </div>
              <div className={styles.linkWrapper}>
                  <a href="javascript:;" className={styles.startReviewLink} onClick={onStartReview}>Start your review</a>
              </div>
          </div>
      </div>
    </div>    
  )
};

export default UserReview;
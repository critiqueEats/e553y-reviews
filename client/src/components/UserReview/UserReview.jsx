import AddStars from '../AddStars/AddStars.jsx';
import styles from './styles.css';


const UserReview = ({postedReview, reviewDone, startReview, onStarClick}) => {

  if(reviewDone) {
    return (
      <li> <ReviewListItem review={postedReview} />  </li>
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
                  <AddStars onStarClick={onStarClick}/>
              </div>
              <div className={styles.linkWrapper}>
                  <a href="javascript:;" className={styles.startReviewLink} onClick={startReview}>Start your review</a>
              </div>
          </div>
      </div>
    </div>    
  )
};

export default UserReview;
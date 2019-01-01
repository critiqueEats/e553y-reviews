import React from 'react';
import styles from './styles.css';
import AddStars from '../AddStars/AddStars.jsx';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.reviewText = null;
        this.starCount = null;

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.setStarCount = this.setStarCount.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const reviewObj =  {
            name: 'ananymous',
            text: this.reviewText,
            stars: this.starCount
        }
        this.props.onReviewPost(reviewObj);
    }
    onInputChange (event) {
        const reviewText = event.target.value;
        this.reviewText = reviewText;
    }

    setStarCount (starCount) {
        this.starCount = starCount;
    }

    render() {
        return(
        <div className={styles.background}>
            <div className={styles.container}>
                <form className={styles.reviewForm} id="reviewForm" onSubmit={this.onSubmit}>
                    <AddStars defaultStars={this.props.stars} mode={"inline"} onStarClick={this.setStarCount}/>
                    <textarea className={styles.reviewText} onChange={this.onInputChange} placeholder={`Your review helps others learn about great local businesses.\n\nPlease don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees.`}>
                    </textarea>
                    <input className={styles.submitButton} type="submit"  value="Post Review" />
                </form>
            </div>
        </div>
        )
    }
}

export default AddReview;

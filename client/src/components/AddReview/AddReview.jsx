import React from 'react';
import styles from './styles.css';
import AddStarsContainer from '../AddStars/AddStarsContainer.jsx';
import Icon from '../Icon/Icon.jsx';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.reviewText = null;

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(e, cancelled) {
        e.preventDefault();
        const reviewObj =  {
            name: 'anonymous',
            text: this.reviewText,
            stars: this.props.userStarCount
        }
        
        if(cancelled) {
            return this.props.onReviewPost(cancelled);
        }

        this.props.onReviewPost(null, reviewObj);
    }
    onInputChange (event) {
        const reviewText = event.target.value;
        this.reviewText = reviewText;
    }

    render() {
        return(
        <div className={styles.background}>
            <div className={styles.container}>
                <form className={styles.reviewForm} id="reviewForm" onSubmit={this.onSubmit}>
                    <button className={styles.cancelButton} onClick={(e) => this.onSubmit(e, 'cancelled')}>
                        <Icon name="close_small" fill="#d32323" />
                    </button>
                    <AddStarsContainer mode={"inline"} />
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

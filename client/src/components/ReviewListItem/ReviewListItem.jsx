import React from 'react';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Links from '../Links/Links.jsx';
import RatingStars from '../RatingStars/RatingStars.jsx';
import PhotoPreview from '../PhotoPreview/PhotoPreview.jsx';
import Vote from '../Vote/Vote.jsx';
import styles from './styles.css';

class ReviewListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
    }
    onHoverIn() {
       this.setState({
           hovered: true
       })
    }
    onHoverOut() {
       this.setState({
           hovered: false
       })
    }
    render(){
        const {user, photos, stars, text, date, cool, funny, useful} = this.props.review;
        return (
            <div className={styles.container} onMouseEnter={this.onHoverIn.bind(this)} onMouseLeave={this.onHoverOut.bind(this)}>
                <div className={styles.userSidePanel}>
                    <ul>
                        <li>
                            <UserInfo userInfo={user} />
                        </li>
                        <li>
                            <Links name={user.name} show={this.state.hovered} />
                        </li>
                    </ul>
                </div>
                <div className={styles.reviewContentPanel}>
                    <ul>
                        <li className={styles.alignVertical}>
                            <RatingStars rating={stars} size="medium" />
                            &nbsp;
                            <span className={styles.reviewDate}>{new Date(date).toLocaleDateString()}</span>
                        </li>
                        <li>
                            <p className={styles.reviewText}>{text}</p>
                        </li>
                        <li>
                            {photos.length? <PhotoPreview photos={photos} /> : ''} 
                        </li>
                        <li>
                        <Vote  votes={{useful, funny, cool}} />
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default ReviewListItem;

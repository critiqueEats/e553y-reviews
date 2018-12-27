import React from 'react';
import UserInfo from '../UserInfo/UserInfo.jsx';
import Links from '../Links/Links.jsx';
import RatingStars from '../RatingStars/RatingStars.jsx';
import PhotoPreview from '../PhotoPreview/PhotoPreview.jsx';
import styles from './styles.css';

const ReviewListItem = ({review})=> {
    let {user, photos, stars, text, date, cool, funny, useful} = review;
    return (
    <div className={styles.container}>
        <div className={styles.userSidePanel}>
            <ul>
                <li>
                    <UserInfo userInfo={user} />
                </li>
                <li>
                    <Links name={user.name} />
                </li>
            </ul>
        </div>
        <div className={styles.reviewContentPanel}>
            <ul>
                <li>
                    < RatingStars rating={stars} />
                    <span>{new Date(date).toLocaleDateString()}</span>
                </li>
                <li>
                    <p className={styles.reviewText}>{text}</p>
                </li>
                <li>
                    {photos.length? <PhotoPreview photos={photos} /> : ''} 
                </li>
            </ul>
        </div>
    </div>
    )
}


export default ReviewListItem;
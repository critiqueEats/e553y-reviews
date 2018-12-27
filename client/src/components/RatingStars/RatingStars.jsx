import React from 'react';
import styles from './styles.css';

const RatingStars = ({rating}) => (
    <div className={styles.container}>
    {[0,0,0,0,0].map(()=> (
        <div className={ rating-- > 0 ? styles.starFull : styles.starBlank}>
        </div>
    ))}
    </div>
);

export default RatingStars;
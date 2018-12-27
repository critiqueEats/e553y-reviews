import React from 'react';
import styles from './styles.css';

const PhotoPreview =({photos}) => {
    const photoCount = photos.length;

    if(photoCount === 1) {
        return (
            <div className={styles.container}>
                <div className={styles.photoCardFull}>
                    <img className={styles.thumbnail} src={photos[0]} alt="food picture"/>
                </div>
            </div>
        );
    }
    if(photoCount === 2) {
        return (
            <div className={styles.container}>
                <div className={styles.photoCardHalf}>
                    <img className={styles.thumbnail} src={photos[0]} alt="food picture"/>
                </div>
                <div className={styles.photoCardHalf}>
                    <img className={styles.thumbnail} src={photos[1]} alt="food picture"/>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.photoCardFull}>
                <img className={styles.thumbnail} src={photos[0]} alt="food picture"/>
            </div>
            <div className={styles.photoCardHalf}>
                <img className={styles.thumbnail} src={photos[1]} alt="food picture"/>
            </div>
            <div className={styles.photoCardHalf}>
                <img className={styles.thumbnail} src={photos[2]} alt="food picture"/>
            </div>
        </div>
    )

};

export default PhotoPreview;

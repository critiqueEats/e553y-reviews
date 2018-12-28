import React from 'react';
import styles from './styles.css';
import Icon from '../Icon/Icon.jsx';

const RatingStars = ({rating, size}) => {
    const colorByRating = {
        0: "#CCC",
        1: "#F2BD79",
        2: "#FEC011",
        3: "#FF9242",
        4: "#F15C4F",
        5: "#D32323",
    };
    const fill = colorByRating[rating];
    const heightBySize = {
        small: 12,
        medium: 18,
        large: 30
    };
    const height = heightBySize[size] || size || 18;
    return (
    <div className={styles.container}>
    {[0,0,0,0,0].map(()=> (
        rating-- > 0 ?
            <Icon name={"big_review"} width={height} height={height} fill={fill} />
            :
            <Icon name={"big_review"} width={height} height={height} fill="#CCC" />
        ))}
    </div>
    )
};

export default RatingStars;
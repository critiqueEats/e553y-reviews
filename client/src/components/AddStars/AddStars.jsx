import React from 'react';
import Icon from '../Icon/Icon.jsx';
import styles from './styles.css';

class AddStars extends React.Component {
    constructor(props) {
        super(props);
        this.colorByRating = {
            0: "#CCC",
            1: "#F2BD79",
            2: "#FEC011",
            3: "#FF9242",
            4: "#F15C4F",
            5: "#D32323",
        };
        this.labelByRating = {
            1: "Eek! Methinks not.",
            2: "Meh. I've experienced better.",
            3: "A-OK.",
            4: "Yay! I'm a fan.",
            5: "Woohoo! As good as it gets!"
        }
        this.savedRating = 0;

        this.state = {
            rating: this.savedRating
        }
    }
    onHoverIn(starIndex) {
        this.setState({
            rating: starIndex
        })
    }
    onHoverOut() {
        this.setState({
            rating: this.savedRating
        })
    }
    onStarClick(starIndex) {
        this.savedRating = starIndex;
        if(this.props.onStarClick) {this.props.onStarClick(starIndex)}
    }

    render() {
        let rating = this.state.rating;
        const label = this.labelByRating[rating];
        const fill = this.colorByRating[rating];
        const mode = this.props.mode;
        return (
        <div className={styles.container} onMouseLeave={this.onHoverOut.bind(this)}>
            {[0,0,0,0,0].map((s,idx)=> (                
                <div 
                    key={idx} className={styles.starContainer} 
                    onMouseEnter={this.onHoverIn.bind(this, idx + 1)}
                    onClick={this.onStarClick.bind(this, idx + 1)}>

                    {this.state.rating === idx + 1 && mode === undefined ? 
                        <div className={styles.labelContainer}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.carret}></span>
                        </div>:''
                    }

                    {rating-- > 0 ?
                        <Icon name={"big_review"} width={34} height={34} fill={fill} />
                        :
                        <Icon name={"big_review"} width={34} height={34} fill="#CCC" />
                    }
            </div>
            ))}
            {label && mode === 'inline' ? <p className={styles.inlineLabel}>{label}</p> : ''}
        </div>
        );
    }
} 

export default AddStars;
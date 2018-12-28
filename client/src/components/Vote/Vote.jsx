import React from 'react';
import styles from './styles.css';

const Vote=({votes}) => {
    const {useful, funny, cool} = votes;
    const totalVotes = useful.concat(funny, cool);

    return (
        <div className={styles.container}>
            {totalVotes.length === 0 ?
            <p>Was this review …?</p>

            :totalVotes.length === 1 ?(
            <p> 
                <a href="javascript:" className={styles.voterNames}>{totalVotes[0]}</a>
                &nbsp;voted for this
            </p>
            ):totalVotes.length === 2 ? (
            <p>
                <a href="javascript:" className={styles.voterNames}>{totalVotes[0] + ' and 1 other'}</a>
                &nbsp; voted for this
            </p>
            ):(
            <p>
                <a href="javascript:" className={styles.voterNames}>{
                totalVotes.pop() + " and " + totalVotes.length + " others"
                }</a>
                &nbsp; voted for this review
            </p>
            )}
            <ul className={styles.buttonContainer}>
                <li>
                    <a className={styles.voteButton}>
                        <span className={styles.usefulIcon}></span>
                        Useful&nbsp;
                        <span className={styles.voteCount}>{useful.length ? useful.length : ''}</span>
                        </a>
                </li>                
                <li>
                    <a className={styles.voteButton}>
                        <span className={styles.funnyIcon}></span>
                        Funny&nbsp;
                        <span className={styles.voteCount}>{funny.length ? funny.length : ''}</span>
                        </a>
                </li>                
                <li>
                    <a className={styles.voteButton}>
                        <span className={styles.coolIcon}></span>
                        Cool&nbsp;
                        <span className={styles.voteCount}>{cool.length ? cool.length : ''}</span>
                        </a>
                </li>                
            </ul>
        </div>
    )
};

export default Vote;
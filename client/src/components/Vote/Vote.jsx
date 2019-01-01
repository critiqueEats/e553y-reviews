import React from 'react';
import styles from './styles.css';
import Icon from '../Icon/Icon.jsx';
import Axios from 'axios';

class Vote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userUseful: false,
            userFunny: false,
            userCool: false
        }
    }

onVote(vote) {
    this.setState({loading: true});
    const reviewId = this.props.reviewId;
    
    Axios.post('/reviews/' + reviewId, {
        reviewId, 
        vote,
        state: !this.state[vote],
        user: 'ananymous'
    }).then(() => this.setState( prevState => ({[vote] :!prevState[vote]})))
      .catch(error => console.log(error))
      .then(() => this.setState({loading: false}))

}

render () {
    const {userUseful, userFunny, userCool} = this.state;
    const {useful, funny, cool} = this.props.votes;
    const totalVotes = useful.concat(funny, cool);

    return (
        <div className={styles.container}>
            {(userUseful || userFunny || userCool) ?(
            <p className={styles.voteSuccess}>Thanks for your vote!</p>):
            totalVotes.length === 0 ?
            <p>Was this review …?</p>

            :totalVotes.length === 1 ?(
            <p> 
                <a href="javascript:" className={styles.voterNames}>{totalVotes[0]}</a>
                &nbsp;voted for this review
            </p>
            ):totalVotes.length === 2 ? (
            <p>
                <a href="javascript:" className={styles.voterNames}>{totalVotes[0] + ' and 1 other'}</a>
                &nbsp; voted for this review
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
                    <a className={userUseful ? styles.votedButton : styles.voteButton} onClick={this.onVote.bind(this, 'userUseful')}>
                        <Icon name="useful_outline" height="18" width="18" fill={ userUseful ? "#FFF" : "#666"} />
                        &nbsp;Useful&nbsp;
                        <span className={styles.voteCount}>{useful.length + +userUseful ? useful.length + userUseful : ''}</span>
                        </a>
                </li>                
                <li>
                    <a className={userFunny ? styles.votedButton : styles.voteButton} onClick={this.onVote.bind(this, 'userFunny')}>
                        <Icon name="funny_outline" height="18" width="18" fill={ userFunny ? "#FFF" : "#666"} />
                        &nbsp;Funny&nbsp;
                        <span className={styles.voteCount}>{funny.length + +userFunny ? funny.length + userFunny : ''}</span>
                        </a>
                </li>                
                <li>
                    <a className={userCool ? styles.votedButton : styles.voteButton} onClick={this.onVote.bind(this, 'userCool')}>
                        <Icon name="cool_outline" height="18" width="18" fill={ userCool ? "#FFF" : "#666"} />
                        &nbsp;Cool&nbsp;
                        <span className={styles.voteCount}>{cool.length + +userCool ? cool.length + userCool : ''}</span>
                        </a>
                </li>                
            </ul>
        </div>
    )}
}


export default Vote;
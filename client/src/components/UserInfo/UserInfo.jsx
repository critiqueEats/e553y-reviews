const React = require('react');
const styles = require('./styles.css');
import Icon from '../Icon/Icon.jsx';

const UserInfo = ({userInfo}) => {
    let {name, city, photo, reviewCount, photoCount, elite, friendCount} = userInfo;

    return (
        <div className={styles.userInfo}>
            <div className={styles.avatarPanel}>
                <img className={styles.avatar} src={photo} alt={name + '\'s avatar'} />
            </div>

            <div className={styles.detailsPanel}>
                <ul className={styles.details}>
                    <li><a href="javascript:;" className={styles.userName}>{name}</a></li>
                    <li className={styles.city}>{city}</li>
                    <li className={styles.stats}>
                        <Icon name="friends" width="18" height="18" fill="#f15c00" />
                        &nbsp; <b>{friendCount}</b>
                        &nbsp;{friendCount === 1 ? 'friend' : 'friends'}
                    </li>
                    <li className={styles.stats}>
                        <Icon name="review" width="18" height="18" fill="#f15c00" />
                        &nbsp;<b>{reviewCount}</b>
                        &nbsp;{reviewCount === 1 ? 'review' : 'reviews'}
                    </li>
                    <li className={styles.stats}>
                        <Icon name="camera" width="18" height="18" fill="#f15c00" />
                        &nbsp;<b>{photoCount}</b>
                        &nbsp;{photoCount === 1 ? 'photo' : 'photos'}
                    </li>
                    <li className={styles.stats}>
                        <a className={styles.eliteStatus} href="javascript:;"><strong>{elite !== 'false' ? "Elite " + elite : ''}</strong></a>
                    </li>
                </ul>
                
            </div>
        </div>
    )

}

export default UserInfo;

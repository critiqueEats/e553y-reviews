const React = require('react');
const styles = require('./styles.css');
import Icon from '../Icon/Icon.jsx';

const Links = ({name, show}) => (

    <div className={show? styles.container: styles.hiddenContainer}>
        <ul className={styles.linksList}>
            <li className={styles.linkItem}>
                <a href="javascript:;">
                    <div className={styles.icon}>
                        <Icon name="share" width="18" height="18" fill="#0073BB"/>
                    </div>
                    <div className={styles.iconText}>
                        Share review
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="javascript:;">
                    <div className={styles.icon}>
                        <Icon name="embed" width="18" height="18" fill="#0073BB" />
                    </div>
                    <div className={styles.iconText}>
                        Embed review
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="javascript:;">
                    <div className={styles.icon}>
                        <Icon name="compliment" width="18" height="18" fill="#0073BB" />
                    </div>
                    <div className={styles.iconText}>
                        Compliment
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="javascript:;">
                    <div className={styles.icon}>
                        <Icon name="speech" width="18" height="18" fill="#0073BB" />
                    </div>
                    <div className={styles.iconText}>
                        Send message
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="javascript:;">
                    <div className={styles.icon}>
                        <Icon name="following" width="18" height="18" fill="#0073BB"/>
                    </div>
                    <div className={styles.iconText}>
                        Follow {name}
                    </div>
                </a>
            </li>
        </ul>
    </div>
);

export default Links;
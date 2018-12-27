const React = require('react');
const styles = require('./styles.css');

const Links = ({name}) => (

    <div className={styles.container}>
        <ul className={styles.linksList}>
            <li className={styles.linkItem}>
                <a href="#">
                    <div className={styles.shareIcon}>
                    </div>
                    <div className={styles.iconText}>
                        Share review
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="#">
                    <div className={styles.embedIcon}>
                    </div>
                    <div className={styles.iconText}>
                        Embed review
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="#">
                    <div className={styles.complimentIcon}>
                    </div>
                    <div className={styles.iconText}>
                        Compliment
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="#">
                    <div className={styles.sendMessageIcon}>
                    </div>
                    <div className={styles.iconText}>
                        Send message
                    </div>
                </a>
            </li>
            <li className={styles.linkItem}>
                <a href="#">
                    <div className={styles.followIcon}>
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
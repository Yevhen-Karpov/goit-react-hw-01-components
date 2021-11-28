// import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css'
function Profile( items ) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={items.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
              <p className={styles.name}>{items.username}</p>
        <p className={styles.tag}>@{items.tag}</p>
              <p className={styles.location}>{items.location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
                  <span className={styles.quantity}>{items.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{items.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{items.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}
export default Profile;

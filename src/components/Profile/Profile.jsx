import PropTypes from 'prop-types';
import s from './Profile.module.css';
function Profile(items) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={items.avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{items.username}</p>
        <p className={s.tag}>@{items.tag}</p>
        <p className={s.location}>{items.location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{items.stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{items.stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{items.stats.likes}</span>
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
  likes: PropTypes.number.isRequired,
};
export default Profile;

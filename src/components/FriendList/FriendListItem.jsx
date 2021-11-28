import PropTypes from "prop-types";
import styles from './friendList.module.css'

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ?  styles.online  :  styles.offline }>&#9899;</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

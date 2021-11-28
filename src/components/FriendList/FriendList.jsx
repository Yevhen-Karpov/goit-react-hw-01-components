import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css'
import FriendListItem from './FriendListItem.jsx';

function FriendList({ friends }) {
  return (
    <div><ul className={styles.friend__list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul></div>
    
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
export default FriendList;

import React from 'react';
import PropTypes from 'prop-types';
import s from '../FriendList/FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.jsx';

function FriendList({ friends }) {
  return (
    <div>
      <ul className={s.friend__list}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
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

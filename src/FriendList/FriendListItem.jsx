import PropTypes from "prop-types";
export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className="item">
      <span className={isOnline ? "online" : "offline"}>&#9899;</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

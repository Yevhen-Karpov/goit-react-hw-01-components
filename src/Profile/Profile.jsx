// import React from 'react';
import PropTypes from 'prop-types';

function Profile( items ) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={items.avatar}
          alt="User avatar"
          className="avatar"
        />
              <p className="name">{items.username}</p>
        <p className="tag">@{items.tag}</p>
              <p className="location">{items.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
                  <span className="quantity">{items.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
        <span className="quantity">{items.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
        <span className="quantity">{items.stats.likes}</span>
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

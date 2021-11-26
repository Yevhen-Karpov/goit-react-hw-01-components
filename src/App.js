import FriendList from './FriendList/FriendList.jsx';
import friends from './data/friends.json';
import Profile from './Profile/Profile.jsx';
import user from './data/user.json';

export default function App() {
  return (
    <div>
      <FriendList friends={friends} />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
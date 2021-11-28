import FriendList from './components/FriendList/FriendList.jsx';
import friends from './components/data/friends.json';
import Profile from './components/Profile/Profile.jsx';
import user from './components/data/user.json';
import Statistics from './components/Statistics/Statistics.jsx';
import data from './components/data/data.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import transactions from './components/data/transactions.json';

export default function App() {
  return (
    <div className="container">
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
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

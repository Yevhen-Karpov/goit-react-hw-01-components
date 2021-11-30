import friends from '../../data/friends.json';
import user from '../../data/user.json';
import data from '../../data/data.json';
import transactions from '../../data/transactions.json';

import FriendList from '../FriendList/FriendList';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

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
      <Statistics title="Upload stats" stats={data} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

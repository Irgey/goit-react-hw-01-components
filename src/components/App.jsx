import Profile from "./Profile/Profile";
import user from './Profile/user.json';
import Statistics from "./Statistics/Statistics";
import data from './Statistics/data.json'
import FriendsList from "./FriendList/FriendList";
import friends from './FriendList/friends.json';

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json"
const { username, tag, location, avatar, stats: { followers, views, likes } } = user;
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* <Profile username={username} tag={tag} followers={followers} location={location} avatar={avatar} views={views} likes={likes} /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendsList friends={friends} /> */}
      <TransactionHistory items = {transactions} />
    </div>
  );
};

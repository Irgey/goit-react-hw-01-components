import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';
import FriendsList from './FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';
const {
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
} = user;
export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '25px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        followers={followers}
        location={location}
        avatar={avatar}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

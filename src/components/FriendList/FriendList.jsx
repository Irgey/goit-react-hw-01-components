import PropTypes from 'prop-types';
import FriendsListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()),
};

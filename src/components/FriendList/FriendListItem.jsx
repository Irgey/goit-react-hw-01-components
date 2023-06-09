import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      {/* {isOnline ? (
        <span className={css.statusOnline}></span>
      ) : (
        <span className={css.statusOffline}></span>
      )} */}

      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default FriendsListItem;

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

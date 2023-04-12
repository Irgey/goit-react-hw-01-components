import PropTypes from 'prop-types';


const FriendsListItem = ({ avatar, name, isOnline }) => {

    return (
        <li class="item">
            <span class="status">{isOnline ? "Online" : "Offline"}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    )
};

export default FriendsListItem;

FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}
import {
  FriendsItem,
  Avatar,
  Name,
  IsOnlineStatus,
} from './FriendsListItem.styled';

// import { theme } from 'styles/theme';

export const FriendsListItem = ({ isOnline, name, avatar }) => {
  return (
    <FriendsItem>
      {isOnline ? (
        <IsOnlineStatus style={{ backgroundColor: 'green' }} />
      ) : (
        <IsOnlineStatus style={{ backgroundColor: 'red' }} />
      )}
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </FriendsItem>
  );
};

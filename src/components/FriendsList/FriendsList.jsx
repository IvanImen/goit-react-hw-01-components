import { FriendsListItem } from 'components';
import { FriendsBoard, FriendsBoardProfiles } from './FriendsList.styled';

export const FriendsList = ({ friendsList }) => {
  return (
    <FriendsBoard>
      <FriendsBoardProfiles>
        {friendsList.map(({ id, avatar, name, isOnline }) => (
          <FriendsListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </FriendsBoardProfiles>
    </FriendsBoard>
  );
};

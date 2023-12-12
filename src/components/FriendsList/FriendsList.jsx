import { FriendsListItem } from 'components';
import { LeaderBoard, LeaderBoardProfiles } from './FriendsList.styled';

export const FriendsList = ({ friendsList }) => {
  return (
    <LeaderBoard>
      <LeaderBoardProfiles>
        {friendsList.map(({ id, avatar, name, isOnline }) => (
          <FriendsListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

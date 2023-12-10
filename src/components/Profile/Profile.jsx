import {
  Card,
  CardBody,
  CardPoster,
  CardText,
  Tag,
  UserName,
} from './Profile.styled';

import { ProfileStats } from 'components';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <Card>
      <CardBody>
        <CardPoster src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <CardText>{tag}</CardText>
        <CardText>{location}</CardText>
      </CardBody>
      <ProfileStats userStats={stats} />
    </Card>
  );
};

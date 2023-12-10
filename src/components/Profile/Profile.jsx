// import {
//   Card,
//   CardPoster,
//   CardBody,
//   CardHeader,
//   CardText,
//   CardTitle,
//   CardFooter,
//   Tag,
//   Avatar,
//   UserBox,
//   UserInfo,
//   UserName,
//   Date,
// } from './Profile.styled';

import {
  Card,
  CardBody,
  CardPoster,
  CardText,
  Tag,
  UserName

} from './Profile.styled';

export const Profile = ({user:{name, tag, location, avatar, followers, views, likes}}) => {
  return <Card className="profile">
  <CardBody UserInfo UserInfoclassName="description">
    <CardPoster
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName className="name">{name}</UserName>
    <CardText className="tag">{tag}</CardText>
    <CardText className="location">{location}</CardText>
  </CardBody>

  <ul className="stats">
    <li>
      <Tag className="label">Followers</Tag>
      <Tag className="quantity">{followers}</Tag>
    </li>
    <li>
      <Tag className="label">Views</Tag>
      <Tag className="quantity">{views}</Tag>
    </li>
    <li>
      <Tag className="label">Likes</Tag>
      <Tag className="quantity">{likes}</Tag>
    </li>
  </ul>
</Card>
};

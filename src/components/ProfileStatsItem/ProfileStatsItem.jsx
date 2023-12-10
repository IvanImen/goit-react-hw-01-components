import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './ProfileStatsItem.styled';

export const ProfileStatsItem = ({ title, total }) => {
  return (
    <StatisticBox>
      <StatisticText>{title}</StatisticText>
      <StatisticCounter>{total}</StatisticCounter>
    </StatisticBox>
  );
};

import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';
import { getRandomHexColor } from 'helpers/random-color';

export const StatisticItem = ({ label, percentage }) => {
  return (
    <StatisticBox style={{ backgroundColor: getRandomHexColor() }}>
      <StatisticCounter>{label}</StatisticCounter>
      <StatisticText>{percentage}%</StatisticText>
    </StatisticBox>
  );
};

import { ProfileStatsItem } from 'components';
import { StatisticsList } from './ProfileStats.styled';

export const ProfileStats = ({ userStats }) => {
  const userStatsTitles = Object.keys(userStats);

  return (
    <StatisticsList>
      {userStatsTitles.map(statsTitle => (
        <ProfileStatsItem
          key={statsTitle}
          title={statsTitle}
          total={userStats[statsTitle]}
        />
      ))}
    </StatisticsList>
  );
};

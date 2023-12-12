import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';

export const Statistics = ({ title, statsData }) => {
  return (
    <div>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </div>
  );
};

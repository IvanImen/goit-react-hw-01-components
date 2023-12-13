import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle, Card } from './Statistics.styled';

export const Statistics = ({ title, statsData }) => {
  return (
    <Card>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {statsData.map(({ id, label, percentage }) => (
          <StatisticItem key={id} label={label} percentage={percentage} />
        ))}
      </StatisticsList>
    </Card>
  );
};

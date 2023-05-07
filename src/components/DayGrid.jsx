import { DayItem } from './DayItem';
import { getForecastData } from '../helpers/getForecastData';

const days = await getForecastData();

export const DayGrid = () => {
  return (
    <div className="day__grid">
      {days.map((day) => (
        <DayItem
          key={day.id}
          className={day.selected ? 'day day--selected' : 'day'}
          {...day}
        />
      ))}
    </div>
  );
};

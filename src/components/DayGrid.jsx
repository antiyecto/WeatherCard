import React from 'react';
import { DayItem } from './DayItem';

const daysHardCoded = [
  {
    id: 0,
    dayName: 'Thu',
    icon: '⛅',
    max: '23°',
    min: '11°',
    selected: true,
  },
  {
    id: 1,
    dayName: 'Fri',
    icon: '⛅',
    max: '24°',
    min: '11°',
    selected: false,
  },
  {
    id: 2,
    dayName: 'Sat',
    icon: '⛅',
    max: '25°',
    min: '12°',
    selected: false,
  },
  {
    id: 3,
    dayName: 'Sun',
    icon: '☀️',
    max: '21°',
    min: '13°',
    selected: false,
  },
  {
    id: 4,
    dayName: 'Mon',
    icon: '⛅',
    max: '24°',
    min: '11°',
    selected: false,
  },
  {
    id: 5,
    dayName: 'Tue',
    icon: '🌦️',
    max: '23°',
    min: '11°',
    selected: false,
  },
  {
    id: 6,
    dayName: 'Wed',
    icon: '🌧️',
    max: '17°',
    min: '7°',
    selected: false,
  },
  {
    id: 7,
    dayName: 'Thu',
    icon: '⛅',
    max: '17°',
    min: '9°',
    selected: false,
  },
];

export const DayGrid = () => {
  return (
    <div className="day__grid">
      {daysHardCoded.map((day) => (
        <DayItem
          key={day.id}
          className={day.selected ? 'day day--selected' : 'day'}
          {...day}
        />
      ))}
    </div>
  );
};

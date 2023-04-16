import React from 'react';

export const DayItem = ({ className, dayName, icon, min, max }) => {
  return (
    <div className={className ? className : 'day'}>
      <span className="day__title">{dayName}</span>
      <span className="day__icon">{icon}</span>
      <div>
        <span className="day__maxtemp">{max}</span>
        <span className="day__mintemp">{min}</span>
      </div>
    </div>
  );
};

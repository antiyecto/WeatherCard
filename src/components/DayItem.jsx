export const DayItem = ({ className, dayName, icon, max, min }) => {
  return (
    <div className={className}>
      <span className="day__title">{dayName}</span>
      <span className="day__icon">{icon}</span>
      <div>
        <span className="day__maxtemp">{max}</span>
        <span className="day__mintemp">{min}</span>
      </div>
    </div>
  );
};

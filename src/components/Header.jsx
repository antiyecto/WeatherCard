export const Header = () => {
  const dataHardCoded = {
    dayName: 'Thursday',
    hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
    icon: '🌤️',
    precipitation: '11%',
    humidity: '79%',
    wind: '14',
  };

  return (
    <div className="header">
      <div className="header__left">
        <span className="left__icon"></span>
        <p className="left__title">18</p>
        <p className="left_title--disabled">°C | °F</p>
        <div className="left__list">
          <p className="left__list__item">
            Precipitation: {dataHardCoded.precipitation}
          </p>
          <p className="left__list__item">Humidity: {dataHardCoded.humidity}</p>
          <p className="left__list__item">Wind: {dataHardCoded.wind} km/h</p>
        </div>
      </div>
      <div className="header__right">
        <p className="right__title">Weather</p>
        <p className="right__time">
          {dataHardCoded.dayName} {dataHardCoded.hour}
        </p>
        <p className="right__status">Mostly cloudy</p>
      </div>
    </div>
  );
};

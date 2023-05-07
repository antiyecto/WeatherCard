import { getWeatherData } from '../helpers/getWeatherData';

const weatherData = await getWeatherData();

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <span className="left__icon">{weatherData.icon}</span>
        <p className="left__title">{weatherData.temperature}</p>
        <p className="left_title--disabled">°C | °F</p>
        <div className="left__list">
          <p className="left__list__item">
            Precipitation: {weatherData.precipitation}
          </p>
          <p className="left__list__item">Humidity: {weatherData.humidity}</p>
          <p className="left__list__item">Wind: {weatherData.wind}</p>
        </div>
      </div>
      <div className="header__right">
        <p className="right__title">Weather</p>
        <p className="right__time">
          {weatherData.dayName} {weatherData.hour}
        </p>
        <p className="right__status">Mostly cloudy</p>
      </div>
    </div>
  );
};

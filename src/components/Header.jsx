import React from 'react';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <span className="left__icon">🌤️</span>
        <p className="left__title">18</p>
        <p className="left_title--disabled">°C | °F</p>
        <div className="left__list">
          <p className="left__list__item">Precipitation: 11%</p>
          <p className="left__list__item">Humidity: 79%</p>
          <p className="left__list__item">Wind: 14 km/h</p>
        </div>
      </div>
      <div className="header__right">
        <p className="right__title">Weather</p>
        <p className="right__time">Thursday 10:00</p>
        <p className="right__status">Mostly cloudy</p>
      </div>
    </div>
  );
};

import React from 'react';
import ReactDOM from 'react-dom/client';
import { WeatherCard } from './WeatherCard.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WeatherCard />
  </React.StrictMode>
);

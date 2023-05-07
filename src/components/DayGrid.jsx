/* 
1. Armar las requests => URL
  Current Day (Temperature, Humidity, Precipitation & Wind): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m&forecast_days=1&timezone=America%2FLos_Angeles
  Forecast Temperature (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles
  Forecast Precipitation (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=precipitation_sum&timezone=America%2FLos_Angeles
  Forecast Wind (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=windspeed_10m_max&timezone=America%2FLos_Angeles
2. Hacer la función que haga las resquest => getWeatherData()
3. Procesar los datos => Transformar la response en variables
*/

// }

import { DayItem } from './DayItem';
import { getTemperatureIcon } from '../helpers/getTemperatureIcon';

async function getWeatherData() {
  const temperatureUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles';

  const temperatureResponse = await fetch(temperatureUrl);
  const temperatureData = await temperatureResponse.json();
  console.log(temperatureData);
  const dailyData = temperatureData.daily;

  const days = dailyData.time.map((day, index) => {
    return {
      id: index,
      dayName: new Date(day + 'T00:00:00-07:00').toLocaleDateString('en-US', {
        weekday: 'short',
      }),
      icon: getTemperatureIcon(Math.round(dailyData.temperature_2m_max[index])),
      max: `${Math.round(dailyData.temperature_2m_max[index])}°`,
      min: `${Math.round(dailyData.temperature_2m_min[index])}°`,
      selected: false,
    };
  });

  return days;
}

const days = await getWeatherData();

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

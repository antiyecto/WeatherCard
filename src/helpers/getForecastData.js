import { getTemperatureIcon } from './getTemperatureIcon';

export async function getForecastData() {
  const temperatureUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FLos_Angeles';

  const temperatureResponse = await fetch(temperatureUrl);
  const temperatureData = await temperatureResponse.json();

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

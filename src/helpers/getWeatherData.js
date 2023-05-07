import { getTemperatureIcon } from './getTemperatureIcon';

export async function getWeatherData() {
  const temperatureUrl =
    'https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m&forecast_days=1&timezone=America%2FLos_Angeles';

  const temperatureResponse = await fetch(temperatureUrl);
  const data = await temperatureResponse.json();

  const currentHour = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    hour: 'numeric',
    hour12: false,
  });
  const currentPrecipitation =
    data.hourly.precipitation_probability[currentHour];

  const weatherData = {
    dayName: new Date().toLocaleString('en-US', {
      weekday: 'long',
      timeZone: 'America/Los_Angeles',
    }),
    hour: new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    icon: getTemperatureIcon(
      Math.round(data.hourly.temperature_2m[currentHour])
    ),
    temperature: Math.round(data.hourly.temperature_2m[currentHour]),
    precipitation: `${currentPrecipitation}%`,
    humidity: `${data.hourly.relativehumidity_2m[currentHour]}%`,
    wind: `${data.hourly.windspeed_10m[currentHour].toFixed(1)} km/h`,
  };

  return weatherData;
}

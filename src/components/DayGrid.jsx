import { DayItem } from './DayItem';

/* 
1. Armar las requests => URL
  Current Day (Temperature, Humidity, Precipitation & Wind): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,windspeed_10m&forecast_days=1&timezone=America%2FSao_Paulo
  Forecast Temperature (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo
  Forecast Precipitation (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=precipitation_sum&timezone=America%2FSao_Paulo
  Forecast Wind (7 Days): https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=windspeed_10m_max&timezone=America%2FSao_Paulo
2. Hacer la función que haga las resquest => getWeatherData()
3. Procesar los datos => Transformar la response en variables
*/

const getWeatherData = async () => {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=45.52&longitude=-122.68&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo';
  const resp = await fetch(url);
  const data = resp.json();
  return data;
  // data.daily => data.daily.temperature_2m_max = [temp ] // data.daily.temperature_2m_min
  // data.daily => data.daily.time = [dias calendario]
};

getWeatherData().then((data) => {
  const days = [
    {
      id: 0,
      dayName: data.daily.time[0],
      icon: '🌤️',
      max: `${data.daily.temperature_2m_max}[0]°`,
      min: `${data.daily.temperature_2m_min}[0]°`,
      selected: true,
    },
    {},
  ];
});

const daysHardCoded = [
  {
    id: 0,
    dayName: 'Thu',
    icon: '🌤️',
    max: '23°',
    min: '11°',
    selected: true,
  },
  {
    id: 1,
    dayName: 'Fri',
    icon: '🌤️',
    max: '24°',
    min: '11°',
    selected: false,
  },
  {
    id: 2,
    dayName: 'Sat',
    icon: '🌤️',
    max: '25°',
    min: '12°',
    selected: false,
  },
  {
    id: 3,
    dayName: 'Sun',
    icon: '☀️',
    max: '27°',
    min: '13°',
    selected: false,
  },
  {
    id: 4,
    dayName: 'Mon',
    icon: '🌤️',
    max: '21°',
    min: '13°',
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
    icon: '🌤️',
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

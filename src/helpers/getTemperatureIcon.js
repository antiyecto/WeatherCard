export const getTemperatureIcon = (temperature) => {
  switch (true) {
    case temperature < 0:
      return '❄️';
    case temperature >= 0 && temperature < 15:
      return '🌧️';
    case temperature >= 15 && temperature < 25:
      return '🌤️';
    case temperature >= 25 && temperature < 35:
      return '☀️';
    case temperature >= 35:
      return '🔥';
    default:
      return '🌡️';
  }
};

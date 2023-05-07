export const getStatusByIcon = (icon) => {
  switch (icon) {
    case '❄️':
      return 'Cold';
    case '🌧️':
      return 'Rainy';
    case '🌤️':
      return 'Cloudy';
    case '☀️':
      return 'Sunny';
    case '🔥':
      return 'Hot'; // Hot
    default:
      return '🌡️';
  }
  return;
};

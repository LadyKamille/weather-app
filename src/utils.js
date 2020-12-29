export const fetchWeather = cityName => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'http://api.openweathermap.org';

  if (cityName) {
    return fetch(`${BASE_URL}/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
};

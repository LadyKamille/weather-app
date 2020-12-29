export const fetchWeather = cityName => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'http://api.openweathermap.org';

  if (cityName) {
    return fetch(`${BASE_URL}/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
      .then(async (response) => {
        const result = await response.json()
        if (!response.ok) {
          throw new Error(result?.message)
        }
        return result;
      })
      .catch((error) => Promise.reject(error));
  }
};

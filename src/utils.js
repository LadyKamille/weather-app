import { notification } from 'antd';

export const fetchWeather = cityName => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const BASE_URL = 'http://api.openweathermap.org';

  if (cityName) {
    return fetch(`${BASE_URL}/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`)
      .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result?.message);
        }
        return result;
      })
      .catch((error) => {
        notification.error({
          message: 'Error',
          description: error.message,
        });
      });
  }
};

  export const mergeDailyForecast = (weather) => {
    return weather.reduce((dailyForecast, threeHourForecast, index) => {
      const currentDate = threeHourForecast?.dt_txt.split(' ')[0];
      const newDate = weather[index-1]?.dt_txt.split(' ')[0];
      const dateKey = getDateKey(currentDate);

      if (currentDate === newDate) {
        dailyForecast[dateKey].push(threeHourForecast);
      } else {
        dailyForecast[dateKey] = [threeHourForecast];
      }

      return dailyForecast;
    }, {});
};

const getDateKey = (date) => {
  return new Date(date).toLocaleDateString('en-us', { weekday: 'long' });
};

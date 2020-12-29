import React, { useState } from 'react';
import { List, notification } from 'antd';
import { DailyForecastCard } from '../../components/DailyForecastCard/DailyForecastCard';
import { WeatherForm } from '../../components/WeatherForm/WeatherForm';
import { fetchWeather } from '../../utils';

export const ForecastList = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const onSearchHandler = async (location) => {
    try {
      setLoading(true);
      const response = await fetchWeather(location);
      setWeather(response?.list);
      setLoading(false);
      console.log('weather', weather);
    } catch(error) {
      notification.error({
        message: 'Error',
        description: error.message,
      });
      setLoading(false);
    }
  };

  return (
    <>
      <WeatherForm onSearchHandler={onSearchHandler}/>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={weather}
        loading={loading}
        renderItem={dailyForecast => (
          <List.Item>
            <DailyForecastCard weather={dailyForecast} />
          </List.Item>
        )}
      />
    </>
  );
};

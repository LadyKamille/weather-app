import React from 'react';
import { Card } from 'antd';

export const DailyForecastCard = ({ weather }) => {
  const date = new Date(weather?.dt * 1000).toLocaleDateString();

  return (
    <Card title={date}>
      <p>Current Temp: {weather?.main?.temp}</p>
      <p>Feels Like: {weather?.main?.feels_like}</p>
      <p>Temp Min: {weather?.main?.temp_min}</p>
      <p>Temp Max: {weather?.main?.temp_max}</p>
    </Card>
  );
};

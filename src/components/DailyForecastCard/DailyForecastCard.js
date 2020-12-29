import React from 'react';

export const DailyForecastCard = ({ weather }) => (
  <div>
    <p>{weather?.main?.temp}</p>
  </div>
);

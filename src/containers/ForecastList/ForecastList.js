import React, { useState } from 'react';
import { Col, Row, Spin } from 'antd';
import { DailyForecastCard } from '../../components/DailyForecastCard/DailyForecastCard';
import { WeatherForm } from '../../components/WeatherForm/WeatherForm';
import { fetchWeather, mergeDailyForecast } from '../../utils';

export const ForecastList = () => {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState([]);

  const onSearchHandler = async (location) => {
    try {
      setLoading(true);
      const response = await fetchWeather(location);
      const mappedForecast = mergeDailyForecast(response?.list);
      setWeather(mappedForecast);
      setLoading(false);
    } catch(error) {
      setLoading(false);
    }
  };

  return (
    <>
      <WeatherForm onSearchHandler={onSearchHandler}/>
      {
        loading ?
          <Spin /> :
          <Row gutter={[0, 16]}>
            {
              Object.entries(weather).map(([day, hourly]) => (
                <Col span={4}>
                  <DailyForecastCard day={day} hourlyForecast={hourly}/>
                </Col>
              ))
            }
          </Row>
      }
    </>
  );
};

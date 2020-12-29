import React from 'react';
import { ForecastList } from './containers/ForecastList/ForecastList';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <>
      <h1>Weather</h1>
      <ForecastList />
    </>
  );
}

export default App;

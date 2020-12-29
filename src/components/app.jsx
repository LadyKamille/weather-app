import React from "react";
import { fetchWeather } from '../utils';
import { ReactComponent as Logo } from "../images/sun.svg";
import "../App.css";

function App() {
  fetchWeather("Frankfort");
  return <h1>Weather</h1>;
}

export default App;

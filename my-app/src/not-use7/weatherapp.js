import React, { useState, useEffect } from "react";
import axios from "axios";
// import { WiDaySunny } from 'react-weather-icons';

const Weather = () => {
  const [city, setCity] = useState("Tehran");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const API_KEY = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
  }, [city]);

  return (
    <div>
      <h1>Weather in {city}</h1>
      {weather.main && (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Feels like: {weather.main.feels_like}°C</p>
          <p>Weather: {weather.weather[0].main}</p>
          {/* <WiDaySunny /> */}
        </div>
      )}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </div>
  );
};

export default Weather;

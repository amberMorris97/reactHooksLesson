import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search.jsx';

// If you see this elsewhere, you need to add a different value.
const FILL_ME_IN = 'FILL ME IN';

const WeatherApp = () => {
  const [defaultCity, updateDefault] = useState(null);
  // set up useState for searching a new city

  useEffect(() => {
    axios.get('/weather', { params: { city: 'Bay Shore' } })
      .then(weather => updateDefault(weather.data));
  }, []);

  // make a useEffect for a fetching data for a new city
  /* HINT: We only want this to be called if there is a new city! */
  useEffect(() => {

  }, [FILL_ME_IN]);

  // Example of Conditional Rendering
  if (!defaultCity) {
    return (
      <div>
        <h6>Loading data...</h6>
      </div>
    );
  };

  return (
    <div>
      <h1>Get The Weather</h1>
      <h4> Current Weather For {defaultCity.name} </h4>
      <ul>
        <li>Temp: {Math.floor(defaultCity.temp)}</li>
        <li>Feels Like: {Math.floor(defaultCity.feels_like)}</li>
        <li>Humidity: {Math.floor(defaultCity.humidity)}</li>
        <li>Pressure: {Math.floor(defaultCity.pressure)}</li>
      </ul>
      {/* Create an unordered list for new city data HINT: You might need to use conditional rendering */}
      <Search />
    </div>
  );
};

export default WeatherApp;
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const WeatherDetails: React.FC = () => {
  const weatherData = useSelector((state: RootState) => state.weather.data);

  return (
    <div>
      <h2>Weather Details</h2>
      {weatherData ? (
        <div>
          <p>City: {weatherData.city}</p>
          <p>Latitude: {weatherData.latitude}</p>
          <p>Longitude: {weatherData.longitude}</p>
          <p>Timezone: {weatherData.timezone}</p>
          <p>Wind Speed: {weatherData.windSpeed} m/s</p>
        </div>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherDetails;

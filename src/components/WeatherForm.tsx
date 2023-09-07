import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherByCoordinates, fetchWeatherByCity } from '../services/weatherService';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from '../store/weatherSlice';

const WeatherForm: React.FC = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    try {
      dispatch(fetchWeatherStart());
      let response;
      if (/^-?\d+(\.\d+)?$/.test(search)) {
        // Search by coordinates if the input is a number
        const [lat, lon] = search.split(',').map((coord) => parseFloat(coord.trim()));
        response = await fetchWeatherByCoordinates(lat, lon);
      } else {
        // Search by city name
        response = await fetchWeatherByCity(search);
      }
      dispatch(fetchWeatherSuccess(response));
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message || 'An error occurred'));
    }
  };

  return (
    <div>
      <h2>Search Weather</h2>
      <input
        type="text"
        placeholder="Enter city name or coordinates (lat, lon)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherForm;

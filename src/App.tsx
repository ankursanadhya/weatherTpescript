import React from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherDetails from './components/WeatherDetails';
import ErrorPopup from './components/ErrorPopup';

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherForm />
      <WeatherDetails />
      <ErrorPopup />
    </div>
  );
}

export default App;

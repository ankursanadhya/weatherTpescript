import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store'; // Correct the import path
import { fetchWeatherFailure } from '../store/weatherSlice';

const ErrorPopup: React.FC = () => {
  const error = useSelector((state: RootState) => state.weather.error);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(fetchWeatherFailure(null));
  };

  return (
    <div className={`error-popup ${error ? 'visible' : ''}`}>
      <div className="error-message">
        <p>{error}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};

export default ErrorPopup;

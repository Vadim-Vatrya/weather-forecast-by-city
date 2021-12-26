import { useState, useEffect } from 'react';

import ErrorView from '../ErrorView';
import DataView from '../DataView';
import LoaderComponent from '../LoaderComponent';
import weatherApi from '../../service/weatherApi';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const WeatherBoard = ({ name }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!name) {
      return;
    }

    setStatus(Status.PENDING);
    weatherApi(name)
      .then(result => {
        const { name } = result;
        const { country } = result.sys;
        const { temp, temp_min, temp_max, feels_like, humidity } = result.main;
        const { description, icon } = result.weather[0];
        const { speed, deg } = result.wind;

        setWeatherData({
          name,
          country,
          description,
          icon,
          temp: temp.toFixed(1),
          feels_like: feels_like.toFixed(1),
          temp_min: temp_min.toFixed(1),
          temp_max: temp_max.toFixed(1),
          speed,
          deg,
          humidity,
        });
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [name]);

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.PENDING) {
    return <LoaderComponent />;
  }

  if (status === Status.REJECTED) {
    return <ErrorView texterror={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <DataView weatherData={weatherData} />;
  }
};

export default WeatherBoard;

'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '@/app/api/weather';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [metricSystem, setMetricSystem] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('metricSystem') || 'metric';
    }
  });
  const [defaultLocation, setDefaultLocation] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('location') || '';
    }
  });

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const fetchData = async (location) => {
    try {
      const currentWeather = await fetchWeather(
        location,
        lat,
        long,
        metricSystem
      );

      if (currentWeather.error) {
        setErrorMessage(currentWeather.error);
        setWeatherData(null);
        setForecastData(null);
      } else {
        setErrorMessage(null);
        setWeatherData(currentWeather.data);

        const currentForecast = await fetchForecast(location, metricSystem);
        setForecastData(currentForecast.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('An error occurred while fetching the weather data');
      setWeatherData(null);
      setForecastData(null);
    }
  };

  useEffect(() => {
    localStorage.setItem('metricSystem', metricSystem);
  }, [metricSystem]);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    if (lat && long) {
      fetchData(defaultLocation);
    }
  }, [metricSystem, lat, long]);

  const updateMetricSystem = (newMetricSystem) => {
    setMetricSystem(newMetricSystem);
  };

  const updateLocation = (location) => {
    localStorage.setItem('location', location);
    setDefaultLocation(location);
    fetchData(location);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        weatherData,
        forecastData,
        metricSystem,
        errorMessage,
        updateMetricSystem,
        updateLocation,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

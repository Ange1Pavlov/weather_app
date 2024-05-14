'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '@/app/api/weather';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const defaultLocation = localStorage.getItem('location') || 'sofia';
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [metricSystem, setMetricSystem] = useState(
    () => localStorage.getItem('metricSystem') || 'metric'
  );

  const fetchData = async (location) => {
    try {
      const currentWeather = await fetchWeather(location, metricSystem);
      setWeatherData(currentWeather);

      const currentForecast = await fetchForecast(location, metricSystem);
      setForecastData(currentForecast);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('metricSystem', metricSystem);
  }, [metricSystem]);

  useEffect(() => {
    fetchData(defaultLocation);
  }, [metricSystem]);

  const updateMetricSystem = (newMetricSystem) => {
    setMetricSystem(newMetricSystem);
  };

  const updateLocation = (location) => {
    localStorage.setItem('location', location);
    fetchData(location);
  };

  return (
    <GlobalStateContext.Provider
      value={{
        weatherData,
        forecastData,
        metricSystem,
        updateMetricSystem,
        updateLocation,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);

'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchWeather, fetchForecast } from '@/app/api/weather';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async (location) => {
      try {
        const currentWeather = await fetchWeather(location);
        setWeatherData(currentWeather);

        const currentForecast = await fetchForecast(location);
        setForecastData(currentForecast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData('sofia');
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        weatherData,
        forecastData,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
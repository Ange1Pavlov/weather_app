import axios from 'axios';
import weatherData from '@/data/weather.json';
import forecastData from '@/data/forecast.json';

export const fetchWeather = async (location, units) => {
  try {
    // const res = await axios.get(
    //   'https://api.openweathermap.org/data/2.5/weather',
    //   {
    //     params: {
    //       q: location,
    //       units: units,
    //       appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    //     },
    //   }
    // );
    // return res.data;
    return weatherData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const fetchForecast = async (location, units) => {
  try {
    // const res = await axios.get(
    //   'https://api.openweathermap.org/data/2.5/forecast',
    //   {
    //     params: {
    //       q: location,
    //       units: units,
    //       appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
    //     },
    //   }
    // );
    // return res.data;
    return forecastData;
  } catch (err) {
    console.log(err);
    return null;
  }
};
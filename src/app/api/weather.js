import axios from 'axios';
import weatherData from '@/data/weather.json';
import forecastData from '@/data/forecast.json';

export const fetchWeather = async (location, lat, long, units) => {
  try {
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: location,
          lat: lat,
          lon: long,
          units: units,
          appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        },
      }
    );
    return {
      data: res.data,
      error: null,
    };
    //return { data: weatherData, error: null };
  } catch (err) {
    console.log(err, 'fetchWeather err');
    if (err.response && err.response.status === 404) {
      return {
        data: null,
        error:
          'This location does not exist in our database, please try another one!',
      };
    } else {
      console.log(err);
      return {
        data: null,
        error: `${err.response.status} - error occurred, please contact support.`,
      };
    }
  }
};

export const fetchForecast = async (location, units) => {
  try {
    const res = await axios.get(
      'https://api.openweathermap.org/data/2.5/forecast',
      {
        params: {
          q: location,
          units: units,
          appid: process.env.NEXT_PUBLIC_WEATHER_API_KEY,
        },
      }
    );
    return {
      data: res.data,
      error: null,
    };
    //return { data: forecastData, error: null };
  } catch (err) {
    console.log(err, 'fetchForecast err');
    return {
      data: null,
      error: `${err.response.status} - error occurred, please contact support.`,
    };
  }
};

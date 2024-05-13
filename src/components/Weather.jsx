'use client';
import { useState, useEffect } from 'react';
import weatherData from '../data/weather.json';
import ConvertDegrees from './ConvertDegrees';
import ConvertDistance from './ConvertDistance';
import ConvertTime from './ConvertTime';
import CapitalizeText from './CapitalizeText';
import Loader from './Loader';
import axios from 'axios';

const Weather = () => {
  const [data, setData] = useState(null);
  const currentTime = new Date();

  const getWeatherData = async () => {
    try {
      // const res = await axios.get(
      //   'https://api.openweathermap.org/data/2.5/weather',
      //   {
      //     params: {
      //       lat: '42.697708',
      //       lon: '23.321867',
      //       appid: 'fc151e957b21da1a5746a3e36303b51a',
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

  useEffect(() => {
    const fetchData = async () => {
      const resData = await getWeatherData();
      console.log(resData);
      setData(resData);
    };

    fetchData();
  }, []);

  return data ? (
    <>
    <small>{<ConvertTime time={currentTime} newFormat='dd MMMM yyyy, HH:mm' />}</small>
      <h1 style={{ fontSize: '1.5rem' }}>
        {data.name}, {data.sys.country}
      </h1>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
        <ConvertDegrees kelvin={data.main.temp} />
      </h2>

      <strong>
        Feels like <ConvertDegrees kelvin={data.main.feels_like} />.{' '}
        <CapitalizeText text={data.weather[0].description} />. Visibility: ~{' '}
        <ConvertDistance meters={data.visibility} />
      </strong>
      <br />
      <br />
      <small>
        <div>
          Min: <ConvertDegrees kelvin={data.main.temp_min} />
        </div>
        <div>
          Max: <ConvertDegrees kelvin={data.main.temp_max} />
        </div>

        <div>Clouds: {data.clouds.all} %</div>
        {data.rain && (
          <div>Rain: {data.rain['1h']} mm (volume for the last 1 hour)</div>
        )}
        {data.snow && (
          <div>Snow: {data.snow['1h']} mm (volume for the last 1 hour)</div>
        )}
        <div>Humidity: {data.main.humidity}%</div>
        <div>Pressure: {data.main.pressure}hPa</div>
        <div>Wind Speed: {data.wind.speed}m/s</div>
        <br />

        <div>
          Sunrise: <ConvertTime time={data.sys.sunrise * 1000} newFormat='HH:mm' />
        </div>
        <div>
          Sunset: <ConvertTime time={data.sys.sunset * 1000} newFormat='HH:mm' />
        </div>
      </small>
    </>
  ) : (
    <Loader />
  );
};

export default Weather;

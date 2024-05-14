import {
  convertTime,
  convertDegrees,
  convertDistance,
  capitalizeText,
} from './Convert';
import Image from 'next/image';
import Loader from './Loader';

const Weather = ({ data }) => {
  const currentTime = new Date();

  return (
    <>
      <small>{convertTime(currentTime, 'dd MMMM yyyy, HH:mm')}</small>
      <h1 style={{ fontSize: '1.5rem' }}>
        {data.name}, {data.sys.country}
      </h1>
      <Image
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        width={100}
        height={100}
        alt={data.weather[0].description}
      />
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
        {convertDegrees(data.main.temp)}&deg;C
      </h2>
      <strong>
        Feels like {convertDegrees(data.main.feels_like)}&deg;C.{' '}
        {capitalizeText(data.weather[0].description)}. Visibility: ~{' '}
        {convertDistance(data.visibility)}
      </strong>
      <br />
      <br />
      <small>
        <div>Min: {convertDegrees(data.main.temp_min)}&deg;C</div>
        <div>Max: {convertDegrees(data.main.temp_max)}&deg;C</div>

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

        <div>Sunrise: {convertTime(data.sys.sunrise * 1000, 'HH:mm')}</div>
        <div>Sunset: {convertTime(data.sys.sunset * 1000, 'HH:mm')}</div>
      </small>
    </>
  );
};

export default Weather;

import { convertTime, convertDegrees } from '../Convert';

const WeatherDetails = ({ data }) => {
  const {
    sys: { sunrise, sunset },
    main: { temp_min, temp_max, humidity, pressure },
    wind,
    clouds,
    rain,
    snow,
  } = data;

  return (
    <div className="mt-4 md:flex md:flex-wrap font-semibold">
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Min</strong>: {convertDegrees(temp_min)}&deg;C
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Max</strong>: {convertDegrees(temp_max)}&deg;C
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Clouds</strong>: {clouds.all} %
      </div>
      {rain && (
        <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
          <strong>Rain</strong>: {rain['1h']} mm (volume for the last 1 hour)
        </div>
      )}
      {snow && (
        <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
          <strong>Snow</strong>: {snow['1h']} mm (volume for the last 1 hour)
        </div>
      )}
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Humidity</strong>: {humidity}%
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Pressure</strong>: {pressure}hPa
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Wind Speed</strong>: {wind.speed}m/s
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Sunrise</strong>: {convertTime(sunrise * 1000, 'HH:mm')}
      </div>
      <div className="sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4">
        <strong>Sunset</strong>: {convertTime(sunset * 1000, 'HH:mm')}
      </div>
    </div>
  );
};

export default WeatherDetails;

import { convertTime } from '../Convert';
import AddUnitSymbol from '../AddUnitSymbol';
import WindUnit from '../WindUnit';
import WeatherItem from './WeatherItem';

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
    <div className='mt-4 md:flex md:flex-wrap font-semibold'>
      <WeatherItem label='Min'>
        <AddUnitSymbol unit={temp_min} />
      </WeatherItem>
      <WeatherItem label='Max'>
        <AddUnitSymbol unit={temp_max} />
      </WeatherItem>
      <WeatherItem label='Clouds'>{clouds.all} %</WeatherItem>
      {rain && (
        <WeatherItem label='Rain'>
          {rain['1h']} mm (volume for the last 1 hour)
        </WeatherItem>
      )}
      {snow && (
        <WeatherItem label='Snow'>
          {snow['1h']} mm (volume for the last 1 hour)
        </WeatherItem>
      )}
      <WeatherItem label='Humidity'>{humidity}%</WeatherItem>
      <WeatherItem label='Pressure'>{pressure}hPa</WeatherItem>
      <WeatherItem label='Wind Speed'>
        <WindUnit unit={wind.speed} />
      </WeatherItem>
      <WeatherItem label='Sunrise'>
        {convertTime(sunrise * 1000, 'HH:mm')}
      </WeatherItem>
      <WeatherItem label='Sunset'>
        {convertTime(sunset * 1000, 'HH:mm')}
      </WeatherItem>
    </div>
  );
};

export default WeatherDetails;

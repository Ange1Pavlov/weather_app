'use client';
import { useGlobalState } from '../GlobalStateContext';
import WeatherDetails from './WeatherDetails';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import AllDayForecast from '../Forecast/AllDayForecast';
import Loader from '../Loader';

const Weather = () => {
  const { weatherData } = useGlobalState();

  if (!weatherData) {
    return <Loader />;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-5">
        <WeatherHeader
          name={weatherData.name}
          country={weatherData.sys.country}
        />
        <WeatherBody data={weatherData} />
        <WeatherDetails data={weatherData} />
      </div>
      <AllDayForecast />
    </div>
  );
};

export default Weather;

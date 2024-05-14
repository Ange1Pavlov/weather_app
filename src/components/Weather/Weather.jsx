'use client';
import { useGlobalState } from '../GlobalStateContext';
import WeatherDetails from './WeatherDetails';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import AllDayForecast from '../Forecast/AllDayForecast';
import MainCard from '../MainCard';
import Loader from '../Loader';
import MetricSytemButtons from '../MetricSytemButtons';
import LocationFrom from '../LocationFrom';

const Weather = () => {
  const { weatherData } = useGlobalState();

  if (!weatherData) {
    return <Loader />;
  }

  return (
    <>
      <LocationFrom />
      <MainCard>
        <div className="p-5">
          <WeatherHeader
            name={weatherData.name}
            country={weatherData.sys.country}
          />
          <WeatherBody data={weatherData} />
          <MetricSytemButtons />
          <WeatherDetails data={weatherData} />
        </div>
        <AllDayForecast />
      </MainCard>
    </>
  );
};

export default Weather;

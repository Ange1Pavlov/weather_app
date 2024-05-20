'use client';
import { useGlobalState } from '../GlobalStateContext';
import WeatherDetails from './WeatherDetails';
import WeatherHeader from './WeatherHeader';
import WeatherBody from './WeatherBody';
import AllDayForecast from '../Forecast/AllDayForecast';
import MainCard from '../MainCard';
import Loader from '../Loader';
import MetricSytemButtons from '../MetricSytemButtons';
import ErrorMessage from '../ErrorMessage';

const Weather = () => {
  const { weatherData, errorMessage } = useGlobalState();

  if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;
  if (!weatherData) return <Loader />;

  return (
    <>
      <MainCard showHeader>
        <div className='p-5'>
          <WeatherHeader
            name={weatherData.name}
            country={weatherData.sys.country}
          />
          <WeatherBody data={weatherData} showDesc showIcon iconSize={100} />
          <MetricSytemButtons />
          <WeatherDetails data={weatherData} />
        </div>
        <AllDayForecast />
      </MainCard>
    </>
  );
};

export default Weather;

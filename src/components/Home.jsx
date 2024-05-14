'use client';
import Weather from './Weather';
import Forecast from './Forecast';
import { useGlobalState } from './GlobalStateContext';

const Home = () => {
  const { weatherData, forecastData } = useGlobalState();
  
  if (!weatherData || !forecastData) {
    // Return a loading indicator or handle the case when data is not yet available
    return <div>Loading...</div>;
  }

  return (
    <>
      <Weather data={weatherData} />
      <Forecast data={forecastData} />
    </>
  );
};

export default Home;

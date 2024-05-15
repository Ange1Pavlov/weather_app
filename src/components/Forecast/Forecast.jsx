'use client';
import { useGlobalState } from '../GlobalStateContext';
import ForecastByDate from './ForecastByDate';
import Loader from '../Loader';

const Forecast = () => {
  const { forecastData } = useGlobalState();

  return (
    forecastData && (
      <div className="container">
        <ForecastByDate data={forecastData} />
      </div>
    )
  );
};

export default Forecast;

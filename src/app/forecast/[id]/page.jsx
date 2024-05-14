'use client';
import { useGlobalState } from '@/components/GlobalStateContext';
import { convertTime } from '@/components/Convert';
import ForecastList from '@/components/ForecastList';

const DailyForecast = ({ params }) => {
  const { forecastData } = useGlobalState();
  const date = convertTime(params.id * 1000, 'dd');

  return (
    <main>
      <h1>
        <strong>{convertTime(params.id * 1000, 'dd MMMM yyyy')}</strong>
      </h1>
      <ForecastList data={forecastData} date={date} extend />
    </main>
  );
};

export default DailyForecast;

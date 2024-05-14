'use client';
import { useGlobalState } from '@/components/GlobalStateContext';
import { convertTime } from '@/components/Convert';
import AllDayForecast from '@/components/Forecast/AllDayForecast';
import Loader from '@/components/Loader';

const DailyForecast = ({ params }) => {
  const { forecastData } = useGlobalState();
  const date = convertTime(params.id * 1000, 'dd');

  if (!forecastData) {
    return <Loader />;
  }

  return (
    <main>
      <h1>
        <strong>{convertTime(params.id * 1000, 'dd MMMM yyyy')}</strong>
      </h1>
      <AllDayForecast data={forecastData} date={date} extend />
    </main>
  );
};

export default DailyForecast;

'use client';
import { useGlobalState } from '@/components/GlobalStateContext';
import { convertTime } from '@/components/Convert';
import AllDayForecast from '@/components/Forecast/AllDayForecast';
import MainCard from '@/components/MainCard';
import Loader from '@/components/Loader';

const DailyForecast = ({ params }) => {
  const { forecastData } = useGlobalState();
  const date = convertTime(params.id * 1000, 'dd');

  if (!forecastData) {
    return <Loader />;
  }

  return (
    <main>
      <MainCard>
        <h1 className="text-2xl font-bold p-5 text-center">
          <strong>{convertTime(params.id * 1000, 'dd MMMM yyyy')}</strong>
        </h1>
        <AllDayForecast data={forecastData} date={date} extend />
      </MainCard>
    </main>
  );
};

export default DailyForecast;

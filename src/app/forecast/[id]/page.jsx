'use client';
import { useGlobalState } from '@/components/GlobalStateContext';
import { convertTime } from '@/components/Convert';
import AllDayForecast from '@/components/Forecast/AllDayForecast';
import MainCard from '@/components/MainCard';
import Loader from '@/components/Loader';
import ErrorMessage from '@/components/ErrorMessage';

const DailyForecast = ({ params }) => {
  const { forecastData, errorMessage } = useGlobalState();
  const date = convertTime(params.id * 1000, 'dd');

  if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;
  if (!forecastData) return <Loader />;

  return (
    <main>
      <MainCard showHeader>
        <h1 className='text-2xl font-bold p-5 text-center'>
          <strong>
            The weather in {forecastData.city.name},{' '}
            {convertTime(params.id * 1000, 'dd MMMM yyyy')}
          </strong>
        </h1>
        <AllDayForecast data={forecastData} date={date} extend />
      </MainCard>
    </main>
  );
};

export default DailyForecast;

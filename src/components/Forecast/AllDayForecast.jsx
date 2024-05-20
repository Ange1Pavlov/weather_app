import { useGlobalState } from '../GlobalStateContext';
import { convertTime, capitalizeText } from '../Convert';
import AddUnitSymbol from '../AddUnitSymbol';
import Image from 'next/image';
import Loader from '../Loader';

const AllDayForecast = ({ extend, date }) => {
  const { forecastData } = useGlobalState();
  const currentTime = new Date();
  const currentDate = convertTime(currentTime, 'dd');

  if (!forecastData) {
    return <Loader />;
  }

  return (
    <>
      <h2 className='font-bold text-xl text-center p-2'>
        The weather for <strong>{date ? date : 'today'}</strong> is the
        following
      </h2>
      <ul className='flex flex-wrap md:flex-nowrap text-white bg-gray-900'>
        {forecastData.list
          .filter((item) => convertTime(item.dt * 1000, 'dd') === currentDate)
          .map((item) => {
            return (
              <li key={item.dt} className='p-2 w-1/2 md:w-full text-center'>
                <div className='text-md font-600'>
                  {convertTime(item.dt * 1000, 'HH:mm')}
                </div>
                <div className='text-sm font-bold py-2'>
                  <AddUnitSymbol unit={item.main.temp} />
                </div>
                {item.weather[0].icon && (
                  <div className='flex justify-center'>
                    <Image
                      src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                      width={45}
                      height={45}
                      alt={capitalizeText(item.weather[0].description)}
                    />
                  </div>
                )}
                {extend && <p>{capitalizeText(item.weather[0].description)}</p>}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default AllDayForecast;

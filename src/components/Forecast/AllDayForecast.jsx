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
      <ul className='flex flex-wrap md:flex-nowrap text-white bg-gray-900  p-5 md:p-2'>
        {forecastData.list
          .filter((item) => {
            const newTime = convertTime(item.dt_txt, 'dd');
            return newTime === currentDate;
          })
          .map((item) => (
            <li key={item.dt} className='w-1/2 md:w-full text-center'>
              <div className='text-xl md:text-md font-600'>
                {convertTime(item.dt * 1000, 'HH:mm')}
              </div>
              <div className='text-lg md:text-md font-black py-2'>
                <AddUnitSymbol unit={item.main.temp} />
              </div>
              {item.weather[0].icon && (
                <div className='flex flex-col items-center justify-center w-24 h-24 md:h-12 md:w-8 min-h-32 md:min-h-0 mx-auto'>
                  <Image
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                    width={100}
                    height={100}
                    alt={capitalizeText(item.weather[0].description)}
                  />
                </div>
              )}
              {extend && <p>{capitalizeText(item.weather[0].description)}</p>}
            </li>
          ))}
      </ul>
    </>
  );
};

export default AllDayForecast;

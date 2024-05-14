import { useGlobalState } from '../GlobalStateContext';
import { convertTime, convertDegrees } from '../Convert';
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
      <h2 className="font-bold text-xl text-center p-2">
        The weather for {date ? date : 'today'} is the following
      </h2>
      <ul className="flex flex-wrap md:flex-nowrap text-white bg-gray-900">
        {forecastData.list
          .filter((item) => convertTime(item.dt * 1000, 'dd') === currentDate)
          .map((item) => (
            <li key={item.dt} className="p-4 w-1/2 md:w-full text-center">
              <div className="text-md font-600">
                {convertTime(item.dt * 1000, 'HH:mm')}
              </div>
              <div className="text-sm font-bold py-2">
                {convertDegrees(item.main.temp)}&deg;C
              </div>
              {item.weather[0].icon && (
                <div className="flex justify-center">
                  <Image
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                    width={45}
                    height={45}
                    alt={item.weather[0].description}
                  />
                </div>
              )}
              {extend && <p>{item.weather[0].description}</p>}
            </li>
          ))}
      </ul>
    </>
  );
};

export default AllDayForecast;

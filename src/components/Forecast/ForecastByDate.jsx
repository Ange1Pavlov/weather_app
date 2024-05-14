import { convertTime, convertDegrees } from '../Convert';
import Image from 'next/image';
import Link from 'next/link';

const ForecastByDate = ({ data }) => {
  const currentTime = new Date();
  const currentDate = convertTime(currentTime, 'dd');

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="flex items-center md:pb-5 w-full py-2 md:py-5">
      <ul className="flex md:justify-between flex-wrap w-full">
        {data.list
          .filter((item) => convertTime(item.dt * 1000, 'HH') === '15')
          .map((item) => {
            const getDate = convertTime(item.dt * 1000, 'dd');
            return (
              <li
                key={item.dt}
                className="w-full md:w-auto mb-4 md:mb-0 md:flex-grow-0 min-w-32 p-2 md:p-0"
              >
                <Link
                  href={`/forecast/${item.dt}`}
                  className={`block p-2 rounded-lg shadow-md ${
                    currentDate === getDate
                      ? 'bg-gray-200'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="mr-2">
                      {currentDate === getDate ? (
                        <strong>Today</strong>
                      ) : (
                        <>{convertTime(item.dt * 1000, 'dd')}</>
                      )}
                      <br />
                      <span className="text-gray-600">
                        ~{convertDegrees(item.main.temp)}&deg;C
                      </span>
                    </div>
                    {item.weather && item.weather[0] && (
                      <div>
                        <Image
                          src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                          width={30}
                          height={30}
                          alt={item.weather[0].description}
                        />
                        <p className="text-xs mt-1">
                          {item.weather[0].description}
                        </p>
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ForecastByDate;

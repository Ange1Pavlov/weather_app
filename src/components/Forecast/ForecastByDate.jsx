import { convertTime, capitalizeText } from '../Convert';
import AddUnitSymbol from '../AddUnitSymbol';
import Image from 'next/image';
import Link from 'next/link';

const ForecastByDate = ({ data }) => {
  const currentTime = new Date();
  const currentDate = convertTime(currentTime, 'dd');

  if (!data) {
    return <Loader />;
  }

  return (
    <div className='flex items-center md:pb-5 w-full py-2 md:py-5'>
      <ul className='flex md:justify-between flex-wrap w-full'>
        {data.list
          .filter((item) => convertTime(item.dt * 1000, 'HH') === '15')
          .map((item) => {
            const getDate = convertTime(item.dt * 1000, 'dd');
            return (
              <li
                key={item.dt}
                className='w-full md:w-auto mb-4 md:mb-0 md:flex-grow-0 min-w-32 p-2 md:p-0'
              >
                <Link
                  href={`/forecast/${item.dt}`}
                  className={`block p-2 rounded-lg shadow-md ${
                    currentDate === getDate
                      ? 'bg-gray-200'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <div className='flex md:flex-col items-center justify-between md:justify-normal w-full px-5 md:px-0'>
                    <div className='mr-2 text-center'>
                      <strong className='text-4xl md:text-base font-extrabold md:font-bold'>
                        {currentDate === getDate
                          ? 'Today'
                          : convertTime(item.dt * 1000, 'dd')}
                      </strong>
                      <div>
                        ~<AddUnitSymbol unit={item.main.temp} />
                      </div>
                    </div>
                    {item.weather && item.weather[0] && (
                      <>
                        <p className='md:text-sm mt-1 text-center'>
                          {capitalizeText(item.weather[0].description)}
                        </p>
                        <div className='flex flex-col items-center w-24 h-24 md:h-12 md:w-8 min-h-32 md:min-h-0'>
                          <Image
                            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                            width={100}
                            height={100}
                            alt={capitalizeText(item.weather[0].description)}
                          />
                        </div>
                      </>
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

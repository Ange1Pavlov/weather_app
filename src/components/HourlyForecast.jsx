import { convertTime, convertDegrees } from './Convert';
import Image from 'next/image';
import Link from 'next/link';

const HourlyForecast = ({ data }) => {
  const currentTime = new Date();
  const currentDate = convertTime(currentTime, 'dd');

  if (!data) {
    return <Loader />;
  }

  return (
    <ul style={{ display: 'flex', flexDirection: 'row' }}>
      {data.list
        .filter((item) => {
          const getHour = convertTime(item.dt * 1000, 'HH');
          return getHour === '15';
        })
        .map((item) => {
          const getDate = convertTime(item.dt * 1000, 'dd');
          return (
            <li key={item.dt} style={{ padding: '1rem' }}>
              <Link href={`/forecast/${item.dt}`} className={currentDate === getDate && 'disabled'}>
                {currentDate === getDate ? (
                  <strong>Today</strong>
                ) : (
                  <>{convertTime(item.dt * 1000, 'dd')}</>
                )}
                <br />
                {/* {convertTime(item.dt * 1000, 'HH:mm')}
            <br /> */}
                ~{convertDegrees(item.main.temp)}&deg;C
                <Image
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                  width={50}
                  height={50}
                  alt={item.weather[0].description}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default HourlyForecast;

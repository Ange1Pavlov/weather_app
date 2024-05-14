import { convertTime, convertDegrees } from './Convert';
import Image from 'next/image';
import Loader from './Loader';

const ForecastList = ({ data, date, extend }) => {
  if (!data) {
    return <Loader />;
  }

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#c6c53f',
      }}
    >
      {data.list
        .filter((item) => {
          const getDate = convertTime(item.dt * 1000, 'dd');
          return date === getDate;
        })
        .map((item) => {
          console.log(item, 'single item');
          return (
            <li key={item.dt} style={{ padding: '1rem' }}>
              {/* {convertTime(item.dt * 1000, 'dd')}
            <br /> */}
              {convertTime(item.dt * 1000, 'HH:mm')}
              <br />
              {convertDegrees(item.main.temp)}&deg;C
              <Image
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`}
                width={50}
                height={50}
                alt={item.weather[0].description}
              />
              {extend && <div>{item.weather[0].description}</div>}
            </li>
          );
        })}
    </ul>
  );
};

export default ForecastList;

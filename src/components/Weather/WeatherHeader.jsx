import { convertTime } from '../Convert';

const WeatherHeader = ({ name, country, showTime }) => {
  const currentTime = new Date();
  return (
    <div className='flex flex-col justify-center items-center'>
      {showTime && (
        <small>{convertTime(currentTime, 'dd MMMM yyyy, HH:mm')}</small>
      )}
      <h1 className='text-xl font-semibold mt-2'>
        {name}, {country}
      </h1>
    </div>
  );
};

export default WeatherHeader;

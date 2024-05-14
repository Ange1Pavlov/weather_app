import { convertTime } from './Convert';
import Loader from './Loader';
import ForecastList from './ForecastList';
import HourlyForecast from './HourlyForecast';

const Forecast = ({ data }) => {
  const currentTime = new Date();
  const currentDate = convertTime(currentTime, 'dd');

  return (
    <div>
      <ForecastList data={data} date={currentDate} />
      <HourlyForecast data={data} />
    </div>
  );
};

export default Forecast;

import Weather from './Weather/Weather';
import Forecast from './Forecast/Forecast';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 md:p-2">
      <div className=" text-black/90 min-w-[320px] md:max-w-[700px] mx-auto w-full">
        <Weather />
        <Forecast />
      </div>
    </div>
  );
};

export default Home;

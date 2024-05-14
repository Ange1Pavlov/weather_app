import { convertDistance, capitalizeText } from '../Convert';
import AddUnitSymbol from '../AddUnitSymbol';
import Image from 'next/image';

const WeatherBody = ({ data }) => {
  const {
    main: { temp, feels_like },
    visibility,
    weather: [{ description, icon }],
  } = data;

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <div className="bg-gray-600 p-1 md:p-5 overflow-hidden rounded-full">
        <Image
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          width={100}
          height={100}
          alt={capitalizeText(description)}
        />
      </div>
      <h2 className="text-5xl font-bold mt-4">
        <AddUnitSymbol unit={temp} />
      </h2>
      <h3 className="text-lg font-semibold">
        Feels like <AddUnitSymbol unit={feels_like} />{' '}
        {capitalizeText(description)}. Visibility: ~{' '}
        {convertDistance(visibility)}
      </h3>
    </div>
  );
};

export default WeatherBody;

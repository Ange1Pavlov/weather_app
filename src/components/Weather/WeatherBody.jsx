import { convertDistance, capitalizeText } from '../Convert';
import AddUnitSymbol from '../AddUnitSymbol';
import Image from 'next/image';

const WeatherBody = ({
  data,
  showIcon,
  iconSize,
  showDesc,
  iconBgColor,
  headingSize,
  customURL,
}) => {
  const {
    main: { temp, feels_like },
    visibility,
    weather: [{ description, icon }],
  } = data;

  return (
    <div className='flex flex-col justify-center items-center py-2'>
      <div className='flex flex-col md:flex-row md:p-5 md:space-x-4 justify-center items-center'>
        {showIcon && (
          <div
            className={`${iconBgColor || 'bg-gray-900'} p-1 md:p-5 overflow-hidden rounded-full`}
          >
            <Image
              src={
                customURL || `https://openweathermap.org/img/wn/${icon}@4x.png`
              }
              width={iconSize}
              height={iconSize}
              alt={customURL ? 'Icon' : capitalizeText(description)}
            />
          </div>
        )}
        <h2
          className='font-bold mt-4'
          style={{ fontSize: headingSize || '4rem' }}
        >
          <AddUnitSymbol unit={temp} />
        </h2>
      </div>
      {showDesc && (
        <h3 className='text-lg font-semibold text-center pb-5'>
          Feels like <AddUnitSymbol unit={feels_like} />{' '}
          {capitalizeText(description)}. Visibility: ~{' '}
          {convertDistance(visibility)}
        </h3>
      )}
    </div>
  );
};

export default WeatherBody;

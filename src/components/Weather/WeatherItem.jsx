const WeatherItem = ({ label, children }) => {
  return (
    <div className='sm:w-1/2 md:w-1/3 md:px-2 mb-2 md:mb-4 text-2xl md:text-base'>
      <strong>{label}</strong>: {children}
    </div>
  );
};

export default WeatherItem;

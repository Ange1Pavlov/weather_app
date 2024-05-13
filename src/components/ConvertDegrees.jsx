const ConvertDegrees = ({ kelvin }) => {
  const degree = kelvin - 273.15;
  return <>{degree.toFixed(1)}&deg;C</>;
};

export default ConvertDegrees;

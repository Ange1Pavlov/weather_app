const ConvertDistance = ({ meters }) => {
  const kilometers = meters / 1000;
  return <>{kilometers.toFixed(1)}km</>;
};

export default ConvertDistance;
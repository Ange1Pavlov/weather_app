import { useGlobalState } from './GlobalStateContext';

const WindUnit = ({ unit }) => {
  const { metricSystem } = useGlobalState();
  return (
    <>
      {unit}
      {metricSystem === 'metric' ? <span>m/s</span> : <span>mph</span>}
    </>
  );
};

export default WindUnit;

import { useGlobalState } from './GlobalStateContext';

const AddUnitSymbol = ({ unit }) => {
  const { metricSystem } = useGlobalState();
  return (
    <>
      {unit}
      {metricSystem === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
    </>
  );
};

export default AddUnitSymbol;

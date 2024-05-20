import { useGlobalState } from './GlobalStateContext';

const AddUnitSymbol = ({ unit }) => {
  const { metricSystem } = useGlobalState();
  const rounded = Math.round(unit);

  return (
    <>
      {rounded}
      {metricSystem === 'metric' ? <span>&deg;C</span> : <span>&deg;F</span>}
    </>
  );
};

export default AddUnitSymbol;

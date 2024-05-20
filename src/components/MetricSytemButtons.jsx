import { useGlobalState } from './GlobalStateContext';
import { capitalizeText } from './Convert';
import Button from './Button';

const ToggleButton = ({ unit, active, onClick }) => {
  const buttonColor = active ? 'bg-slate-500' : 'bg-gray-200';
  const textColor = active ? 'text-white' : 'text-gray-800';

  return (
    <Button
      backgroundColor={buttonColor}
      textColor={textColor}
      label={capitalizeText(unit)}
      onClick={() => onClick(unit)}
    />
  );
};

const MetricSytemButtons = () => {
  const { metricSystem, updateMetricSystem } = useGlobalState();

  const toggleMetricSystem = (value) => {
    if (value !== metricSystem) {
      updateMetricSystem(value);
    }
  };

  return (
    <div className='flex items-center justify-center space-x-4'>
      <ToggleButton
        unit='metric'
        active={metricSystem === 'metric'}
        onClick={toggleMetricSystem}
      />
      <ToggleButton
        unit='imperial'
        active={metricSystem === 'imperial'}
        onClick={toggleMetricSystem}
      />
    </div>
  );
};

export default MetricSytemButtons;

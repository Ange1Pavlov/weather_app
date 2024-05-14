import { useGlobalState } from './GlobalStateContext';

const MetricSytemButtons = () => {
  const { metricSystem, updateMetricSystem } = useGlobalState();

  const toggleMetricSystem = (value) => {
    if (value !== metricSystem) {
      updateMetricSystem(value);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={() => toggleMetricSystem('metric')}
        className={`px-4 py-2 rounded-md ${
          metricSystem === 'metric'
            ? 'bg-slate-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        Metric
      </button>
      <button
        onClick={() => toggleMetricSystem('imperial')}
        className={`px-4 py-2 rounded-md ${
          metricSystem === 'imperial'
            ? 'bg-slate-500 text-white'
            : 'bg-gray-200 text-gray-800'
        }`}
      >
        Imperial
      </button>
    </div>
  );
};

export default MetricSytemButtons;

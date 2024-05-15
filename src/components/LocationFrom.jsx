import { useGlobalState } from './GlobalStateContext';
import { useState } from 'react';

const LocationFrom = () => {
  const { updateLocation } = useGlobalState();
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //WIP: Validations should be added

    updateLocation(location);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mb-5 w-full"
    >
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Search Location"
        className="border border-gray-300 rounded-md px-3 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800"
      >
        Apply
      </button>
    </form>
  );
};

export default LocationFrom;
